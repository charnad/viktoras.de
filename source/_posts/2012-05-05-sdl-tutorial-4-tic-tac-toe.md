---
title: SDL: Как создать игру. Крестики-нолики.
tags: [gamedev, sdl]
categories: [c/c++]
post_date: 05.05.2012
---
<img class="oppic" src="http://www.charnad.com/blog/wp-content/uploads/pictures/sdl_logo.png" alt="SDL" />Это вольный перевод и переосмысление статьи, <a href="http://www.sdltutorials.com/sdl-tutorial-tic-tac-toe">SDL Tutorial - Tic Tac Toe</a> за авторством Tim Jones. Готовый код я буду выкладывать на <a href="https://github.com/charnad/SDLTutorial">Github</a>, откуда вы сможете скачать так же ZIP-архив. Если вы увидите ошибку, неточность, или у вас возникнут проблемы - обращайтесь: вы можете оставить комментарий или написать мне на почту, она указана внизу страницы.

До этого момента мы закладывали основу для создания игры. Мы создавали базовую структуру для обработки общих задач, создали специальный класс для обработки событий, и создали класс для работы с поверхностями. В этом уроке мы их объединим для создания игры в крестики-нолики. Не волнуйтесь, все будет довольно просто. Будем использовать код из последней статьи.<!--more-->

Первое, что мы надо сделать - спланировать игру. Все мы знаем, что крестики-нолики имеют поле 3x3, где игроки ставят крестики или нолики. Итак, для этого нам будет нужно 3 изображения, одно для игрового поля, одно для X, и одно для О. Нам не нужно многокрестиков или ноликов, потому что мы можем отрисовывать их в программе сколько угодно раз. Наше игровое поле будет размером 600x600, а наши X и O будут 200x200 (1/3 площади). 

<img src="http://www.charnad.com/blog/wp-content/uploads/pictures/sdl-tutorials/4/grid.png"/>
<img src="http://www.charnad.com/blog/wp-content/uploads/pictures/sdl-tutorials/4/o.png" style="float: left;"/><img src="http://www.charnad.com/blog/wp-content/uploads/pictures/sdl-tutorials/4/x.png"/>
<br clear="both">[<i>Это png изображения, для работы вам нужны bmp. Их можно взять в репозитории на гитхабе, ссылка в начале поста.</i>]

Теперь у нас есть изображения, и нам нужен способ, чтобы загрузить их в нашу программу. Откройте <strong>App.h</strong> и внесите некоторые изменения. Удалите поверхность Test, и добавьте три новых поверхности.

<pre lang="cpp" line="1">
#ifndef _APP_H_
#define _APP_H_

#include <SDL.h>

#include "Event.h"
#include "Sprite.h"

class App : public Event {
    private:
        bool            Running;
        SDL_Surface*    Screen;

        SDL_Surface*    G;
        SDL_Surface*    X;
        SDL_Surface*    O;

    public:
        App();
        int Execute();

        bool Init();
        void Event(SDL_Event* Evt);
        void Loop();
        void Render();
        void Cleanup();
        void Exit();
};

#endif

</pre>

Далее, откройте <strong>App.cpp</strong> и проделайте то же самое, удалите Test и добавьте три новых поверхности. В конструкторе:

<pre lang="cpp" line="1">
App::App() {
    G = NULL;
    X = NULL;
    O = NULL;
    Screen = NULL;

    Running = true;
}
</pre>

и не забудьте об освобождении ресурсов:

<pre lang="cpp" line="1">
void App::Cleanup() {
    SDL_FreeSurface(G);
    SDL_FreeSurface(X);
    SDL_FreeSurface(O);
    SDL_FreeSurface(Screen);
    SDL_Quit();
}
</pre>

Теперь у нас есть три готовые поверхности, давайте загрузим туда изображения. Найдите App::Init(), и внесите изменения: избавимся от поверхности Test (опять), и загрузим три новых изображения. Обратите внимание, что мы изменили размер окна до размеров игрового поля - 600х600.

<pre lang="cpp" line="1">
bool App::Init() {
    if(SDL_Init(SDL_INIT_EVERYTHING) < 0) {
        return false;
    }

    if((Screen = SDL_SetVideoMode(600, 600, 32, SDL_HWSURFACE | SDL_DOUBLEBUF)) == NULL) {
        return false;
    }

    if((G = Sprite::Load("./gfx/grid.bmp")) == NULL) {
    return false;
    }

    if((X = Sprite::Load("./gfx/x.bmp")) == NULL) {
    return false;
    }

    if((O = Sprite::Load("./gfx/o.bmp")) == NULL) {
    return false;
    }

    return true;
}
</pre>

Как вы могли заметить, теперь графические файлы находятся в папке gfx. Со временем, когда игра растет, становится очень удобно держать все изображения в одной папке. Давайте теперь нарисуем игровое поле на экране. Откройте App::Render.cpp и добавьте следующее:

<pre lang="cpp" line="1">
void App::Render() {
    Sprite::Draw(Screen, G, 0, 0);

    SDL_Flip(Screen);
}
</pre>

Скомпилируйте программу, и если все хорошо - вы должны увидеть игровое поле. Помните, что есть 5 основных моментов использования поверхностей: объявить ее, установите ее в NULL, загрузите изображение, нарисуйте поверхность, а затем освободите ее. Я советую вам, запомнить эти 5 шагов сейчас, потому что позже, если вы пропустите один из них, вы можете столкнуться с проблемами. Например, не установленная в NULL поверхность, может привести к непредсказуемому поведению или, не освобожденная поверхность, может привести к утечке памяти. 

Вы наверняка удивляетесь, почему наши X и O на розовом фоне. Для этого, конечно же, есть причина. Мы собираемся реализовать прозрачность у этих поверхностей. По существу, везде, где сейчас розовый цвет, поверхность будет прозрачной. В SDL есть простая функция для этого SDL_SetColorKey. Давайте добавим ее в <strong>Sprite.h</strong>:

<pre lang="cpp" line="1">
#ifndef _SPRITE_H_
#define _SPRITE_H_

#include <SDL.h>

class Sprite {
    public:
        Sprite();

        static SDL_Surface* Load(const char* File);
        static bool Draw(SDL_Surface* Dest, SDL_Surface* Src, int X, int Y);
        static bool Draw(SDL_Surface* Dest, SDL_Surface* Src, int X, int Y, int X2, int Y2, int W, int H);
        static bool Transparent(SDL_Surface* Surface, int R, int G, int B);
};

#endif

</pre>

Теперь, в <strong>Sprite.cpp</strong> добавим ее реализацию:

<pre lang="cpp" line="1">
bool Sprite::Transparent(SDL_Surface* Surface, int R, int G, int B) {
    if(Surface == NULL) {
        return false;
    }

    SDL_SetColorKey(Surface, SDL_SRCCOLORKEY | SDL_RLEACCEL, SDL_MapRGB(Surface->format, R, G, B));

    return true;
}
</pre>

Обратите внимание на 3 дополнительных параметра, которые передаются помимо поверхности. Эти параметры обозначают цвет, в системе RGB, который мы хотим сделать прозрачным, это не обязательно должен быть розовый. Например, если бы мы хотели, чтобы прозрачным был красный, то передали бы в функцию: 255, 0, 0.

Функция Transparent сначала проверяет, есть ли у нас действительная поверхность. Если да, то установливает цветовой ключ[<i>aka <a href="http://ru.wikipedia.org/wiki/%D5%F0%EE%EC%E0%EA%E5%E9">хромакей</a></i>] (прозрачность). Первым аргументом идет поверхность к которой применяется хромакей, вторым параметром идут различные флаги, а третьим цвет, который будет прозрачным. Флаги, которые мы передаем вполне обычные, первый говорит SDL применять хромакей для переданной поверхности, а второй говорит SDL попытаться использовать RLE ускорение (чтобы сделать отрисовку быстрее). Третий аргумент выглядит чуть более сложным, мы используем SDL_MapRGB для создания цвета. SDL_MapRGB принимает параметром поверхность, и желаемый цвет (R, G, B), и подобрать наиболее близкий к нему для этой поверхности. Не все поверхности имеют одинаковую цветовую палитру. Вспомните старые времена Денди, там можно было использовать всего несколько цветов. Та же идея здесь, SDL_MapRGB берет цвет и сопоставляет его с ближайшим цветом в палитре этой поверхности. 

Давайте теперь применим эту новую функцию к нашим поверхностям, откройте App::Init и внесите следующие изменения:

<pre lang="cpp" line="1">
bool App::Init() {
    if(SDL_Init(SDL_INIT_EVERYTHING) < 0) {
        return false;
    }

    if((Screen = SDL_SetVideoMode(600, 600, 32, SDL_HWSURFACE | SDL_DOUBLEBUF)) == NULL) {
        return false;
    }

    if((G = Sprite::Load("./gfx/grid.bmp")) == NULL) {
    return false;
    }

    if((X = Sprite::Load("./gfx/x.bmp")) == NULL) {
    return false;
    }

    if((O = Sprite::Load("./gfx/o.bmp")) == NULL) {
    return false;
    }

    Sprite::Transparent(X, 255, 0, 255);
    Sprite::Transparent(O, 255, 0, 255);

    return true;
}
</pre>

Теперь все, что касается поверхностей, должно быть готово. Следующее, что нам нужно сделать, это выяснить как рисовать эти X и O. Мы не можем просто рисовать их везде по полю, потому что они не всегда будут в одинаковых местах. И вот что мы сделаем, мы создадим массив из 9 контейнеров, значения в этом массиве будет говорить о том, какая фигура стоит в каждой ячейке клетки, а индекс - номер ячейки. То есть, ячейка с индексом 0 будет в верхнем левом углу, с индексом 1 будет вверху посередине, 2 в правом верхнем углу, 3 в середине слева, и так далее. 

Каждая ячейка может иметь три значения: Empty, X, и О. Чтобы все выглядело немного аккуратнее, чем просто 0, 1, 2, в массиве, мы будем использовать перечисление (enum). Обозначим GRID_TYPE_NONE = 0, GRID_TYPE_X = 1, и GRID_TYPE_O = 2. 

Теперь добавим массив и перечисление в <strong>App.h</strong>:

<pre lang="cpp" line="1">
#ifndef _APP_H_
#define _APP_H_

#include <SDL.h>

#include "Event.h"
#include "Sprite.h"

enum {
    GRID_TYPE_NONE = 0,
    GRID_TYPE_X,
    GRID_TYPE_O
};

class App : public Event {
    private:
        bool            Running;
        SDL_Surface*    Screen;

        SDL_Surface*    G;
        SDL_Surface*    X;
        SDL_Surface*    O;

        int             Grid[9];

    public:
        App();
        int Execute();

        bool Init();
        void Event(SDL_Event* Evt);
        void Loop();
        void Render();
        void Cleanup();
        void Exit();
};

#endif

</pre>

С этого момента, я буду давать только код требуемых функций, а не код из файла. Надеюсь, что вы уже запомнили где находятся основные функции, и это не станет проблемой. Нам нужно добавить функцию сброса игрового поля. Она установит все значения массива в GRID_TYPE_NONE, и это будет означать, что все клетки поля пусты. Добавим так же вызов этой функции в инициализацию:

В <strong>App.h</strong>:

<pre lang="cpp" line="1">
public:
    void Reset();
</pre>

В <strong>App.cpp</strong>:

<pre lang="cpp" line="1">
void App::Reset() {
    for(int i = 0;i < 9;i++) {
        Grid[i] = GRID_TYPE_NONE;
    }
}

bool App::Init() {
    if(SDL_Init(SDL_INIT_EVERYTHING) < 0) {
        return false;
    }

    if((Screen = SDL_SetVideoMode(600, 600, 32, SDL_HWSURFACE | SDL_DOUBLEBUF)) == NULL) {
        return false;
    }

    if((G = Sprite::Load("./gfx/grid.bmp")) == NULL) {
    return false;
    }

    if((X = Sprite::Load("./gfx/x.bmp")) == NULL) {
    return false;
    }

    if((O = Sprite::Load("./gfx/o.bmp")) == NULL) {
    return false;
    }

    Sprite::Transparent(X, 255, 0, 255);
    Sprite::Transparent(O, 255, 0, 255);

    Reset();

    return true;
}
</pre>

Следующее, что мы должны сделать, это функция размещения X и O на экране. Давайте ее создадим. Откройте опять <strong>App.h</strong> и добавьте функцию ниже Reset:

<pre lang="cpp" line="1">
void SetCell(int ID, int Type);
</pre>

И в <strong>App.cpp</strong>:

<pre lang="cpp" line="1">
void App::SetCell(int ID, int Type) {
    if(ID < 0 || ID >= 9) return;
    if(Type < 0 || Type > GRID_TYPE_O) return;

    Grid[ID] = Type;
}
</pre>

Эта функция принимает два аргумента: во-первых, id изменяемой ячейки, а во-вторых тип, в который мы ее устанавливаем. У нас есть два условия, во-первых, убедимся, что мы не выходим за границы массива (иначе наша программа бы упала), а во-вторых, убедимся, что мы задаем правильный тип. Теперь давайте сделаем так, чтобы X и O отрисовывались на экране. Добавим следующий код в <strong>App::Render</strong>:

<pre lang="cpp" line="1">
void App::Render() {
    Sprite::Draw(Screen, G, 0, 0);

    for(int i = 0;i < 9;i++) {
        int cX = (i % 3) * 200;
        int cY = (i / 3) * 200;

        if(Grid[i] == GRID_TYPE_X) {
            Sprite::Draw(Screen, X, cX, cY);
        }else
        if(Grid[i] == GRID_TYPE_O) {
            Sprite::Draw(Screen, O, cX, cY);
        }
    }

    SDL_Flip(Screen);
}
</pre>

Это немного сложнее, чем то, что мы делали до сих пор. Во-первых, мы проходим по каждой ячейке поля, переводим ID клетки в X и Y координаты. Чтобы найти X, мы берем остаток от деления на 3. Это даст нам 0, когда i = 0, 1, когда i = 1, 2, когда i = 2, 0, когда i 3, и так далее. Умножим полученное число на 200, потому что каждая клетка размером 200x200 пикселей, и получаем координату X. Чтобы найти Y, мы делим на 3 без остатка, это дает 0, когда i = [0, 1, 2], 1, когда i = [3, 4, 5], и так далее. Затем опять умножаем на 200. Я настоятельно советую вам разобраться, как это работает, потому что методы такого рода используются для tile-based игр.

Наконец, нам нужно обрабатывать пользовательские действия. Для этого мы будем отлавливать события мышки. Когда пользователь нажимает на ячейку будем ставить в нее X или O. Переопределим один из методов Event для этого. Откройте <strong>App.h</strong> и добавьте функцию и переменную, про нее я скажу чуть позже:

<pre lang="cpp" line="1">
int CurrentPlayer;

void OnLButtonDown(int mX, int mY);
</pre>

И в <strong>App.cpp</strong>:

<pre lang="cpp" line="1">
void App::OnLButtonDown(int mX, int mY) {
    int ID = mX / 200;
    ID = ID + ((mY / 200) * 3);

    if(Grid[ID] != GRID_TYPE_NONE) {
        return;
    }

    if(CurrentPlayer == 0) {
        SetCell(ID, GRID_TYPE_X);
        CurrentPlayer = 1;
    }else{
        SetCell(ID, GRID_TYPE_O);
        CurrentPlayer = 0;
    }
}
</pre>

Сначала мы делаем обратное преобразование, из координат в ID. Затем проверяем, что клетка еще не занята, иначе выходим из функции. Потом проверяем, чей сейчас ход, ставим соответствующую фигуру и передаем ход другому игроку. Как раз CurrentPlayer и говорит нам о том, чей сейчас ход. Кстати, ее надо инициализировать в конструкторе в <strong>App.cpp</strong>:

<pre lang="cpp" line="1">
App::App() {
    CurrentPlayer = 0;

    G = NULL;
    X = NULL;
    O = NULL;

    Screen = NULL;

    Running = true;
}
</pre>

Скомпилируйте программу и вы должны получить почти полностью работающую версию крестиков-ноликов. Поздравляем!

Попробуйте дальше сделать самостоятельно. У нас есть прочный фундамент для нашей игры. Попробуйте добавить "X победил", "О победил" и "Ничья" в конце каждой игры (нужны дополнительные изображения). Подумайте, как вы собираетесь определять, кто выиграл. Попробуйте добавить способ сбросить игру после того, как она закончилась. Если хотите, можете даже попробовать добавить некий искуственный интеллект, который будет играть против пользователей. Или, если вам и этого мало, попробуйте добавить возможность играть игрок против игрока, или игрока против компьютера.

Когда у вас будет твердое понимание, как все работает в этой статье - вы можете перейти к следующей, для изучения покадровой анимации.