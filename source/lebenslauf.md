---
layout: default
title: Lebenslauf
---

{% block invader %}
<div style="padding-top: 3em;"/>
{% endblock %}

{% block head_meta %}
<meta name="robots" content="noindex">
{% endblock %}

{% block head_styles %}
<style>
    #cv-sidebar #cv-photo {
        border: 1px;
        width: 200px;
    }

    #cv-sidebar {
        text-align: center;
    }

    #cv-main h3 {
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid #EEEEEE;
        border-bottom: 1px solid #EEEEEE;
        margin-top: 0;
        margin-bottom: 20px;
    }

    #cv-main h3:before {
        content: "\025A3  "
    }

    #cv-main > div {
        margin-bottom: 3em;
    }
</style>
{% endblock %}

{% block posts %}
<div class="row">
<div id="cv-sidebar" class="col-sm-3">
    <span style="font-size: 125px;"><img src="{{site.url}}/img/viktoras.jpg" id="cv-photo" class="img-thumbnail" alt="☺"/></span>

    <h1>Viktoras Bezaras</h1>

    <p>
        <div>
            <h1 class="glyphicon">&#12484;</h1>
        </div>
        25.09.1986 - {{ date(now).diff(date("1986-09-25")).y }} Jahre
    </p>

    <p>
        <div>
            <h1 class="glyphicon">&#xe135;</h1>
        </div>
        Kasseler Str. 37, 04155 Leipzig, Deutschland
    </p>

    <p>
        <div>
            <h1 class="glyphicon">&#x2709;</h1>
        </div>
        <a href="mailto:charnad@gmail.com">charnad@gmail.com</a>
    </p>
</div>

<div id="cv-main" class="col-sm-9">
    <h3>Arbeitserfahrung</h3>
    
    <div>
        <h5>CTO @ SportSpar GmbH, Leipzig   <small>07/2019 - aktuell</small></h5>
        <p>
            Aufbau des Enwicklungsteams. Etablierung des Agilen Entwicklungsprozessen, Qualitätskontrolle, Infrastruktur, Dokumentierung. Konzipierung und Umsetzung der Internen Tools mit dem Entwicklungsteam.
        </p>
    </div>


    <div>
        <h5>Integrations Lead / Entwickler @ TraSo GmbH, Leipzig   <small>05/2014 - 06/2019</small></h5>
        <p>
            Bei TraSo habe ich im Mai 2014 angefangen im Bereich Hotel Import für eine Backend Enterprise Software für Touristische Veranstalter. Meine Vorgänger haben sich einige Monate zuvor verabschiedet und ich musste dringend mich in Legacy Code ohne jegliche Übergabe einarbeiten. Hotel Import Bereich war damals der Schmerzpunkt und die Hauptaufgabe war die Stabilität und Qualität der Datenverarbeitung zu erreichen. Ich und meine QA-Kollegin haben die Verantwortung, Kunden- und Partner Kommunikation übernommen und innerhalb 2 Jahren haben den Bereich komplett umgebaut. Mit über 1000 Unit-Test hat das Anteil des Bugfix-Tickets von ~90% auf ~10% gesunken, die meisten Aufgaben beziehen sich jetzt auf die neuen Features. Obwohl die Anzahl der Import Anbindungen hat sich seit 2014 mehr als verdreifacht, schaffen wir immer noch zu zweit die Arbeit, was am Anfang für 4-5 Mitarbeiter gedacht wurde. Parallel dazu habe ich weitere Aufgaben übernommen wie: Buchungschnittstellen-Anbindungen, Transferschnittstellen-Anbindungen, OTDS Export.
            <br /><br />
            Tools und Technologien: PHP, MySQL, Zend Framework, PHPUnit, Atlassian Stack (Jira, Stash, Bamboo), GitLab, Git, PhpStorm.
        </p>
    </div>

    <div>
        <h5>Senior Web-Entwickler @ meets-ecommerce OA GmbH, Niesky   <small>06/2013 – 05/2014</small></h5>
        <p>
            Die Firma meets-ecommerce war ein E-commerce Startup mit 5 Mitarbeiter. Wir haben projektiert und entwickelt eine Microservices basierend REST-like Application mit Anbindungen an verschiedene E-commerce Plattformen und Schnittstellen wie z. B. Magento oder eBay. Trotz der Kollegen verlassen, bis wir zwei mit dem Eigentümer geblieben haben, haben wir stark gearbeitet und unseren Bestens gegeben bis die Firma aus finanziellen Gründen leider geschlossen wurde.
            <br /><br />
            Tools und Technologien: PHP, Phalcon Framework, Postgresql, RabbitMQ, RobotFramework, Redmine, Git, PhpStorm, SCRUM.
            <br /><br />
            <a href="{{site.url}}/files/lebenslauf/meets-ecommerce.pdf">Arbeitszeugnis</a>
        </p>
    </div>

    <div>
        <h5>PHP-Entwickler @ netforge GmbH & Co. KG, Berlin    <small>01/2011 – 04/2013</small></h5>
        <p>
            Bei netforge habe ich als Angestellter angefangen nach der erfolgreiche Zusammenarbeit als Consultant. Als meine Hauptaufgabe, hatte ich ein featurevolles Rechnungs-Steuersystem auf Basis Symfony Framework entwickelt. Ich habe die ganze Zeit vom Home Office in Görlitz gearbeitet mit der Kommunikation über Skype.
            <br /><br />
            Tools und Technologien: PHP, Symfony Framework, MySQL, SQLite, Lime (Test Framework), SVN.
            <br /><br />
            <a href="{{site.url}}/files/lebenslauf/netforge.pdf">Arbeitszeugnis</a>
        </p>
    </div>

    <div>
        <h5>PHP-Entwickler (Freiberufler) @ WEB-SHOP-HOSTING, Berlin   <small>03/2010 – 12/2010</small></h5>
        <p>
            An meine erste Projekte in Deutschland habe ich als Freiberufler gearbeitet. Für WEB-SHOP-HOSTING habe ich ein Symfony-basierend CMS-System entwickelt (genutzt für z. B. http://wir-nehmen-wir.net). Ein anderes Projekt war die Weiterentwicklung der Drupal-basierenden http://www.teamdrive.com Webseite.
            <br /><br />
            Tools und Technologien: PHP, Drupal 7, Symfony Framework, MySQL, SQLite, Mercurial.
            <br /><br />
            <a href="{{site.url}}/files/lebenslauf/web-shop-hosting.pdf">Arbeitszeugnis</a>
        </p>
    </div>

    <div>
        <h5>PHP-Entwickler @ RedFortress, Sankt-Petersburg   <small>07/2008 – 03/2010</small></h5>
        <p>
            Bei meiner ersten "echten" Stelle habe ich die existierende Pizza und Sushi Bestellungsseiten Unterstützt, als auch Skripte für SEO gebaut. 
            <br /><br />
            Tools und Technologien: PHP, Symfony Framework, MySQL.
        </p>
    </div>

    <h3>Ausbildung</h3>

    <div>
        <h5>Aspirantur in Informatik   <small>10/2008 – 09/2009</small></h5>
        <p>
            Russische Staatliche Pädagogische Herzen-Universität (Unbeendet wegen Umzugs nach Deutschland)
        </p>
    </div>

    <div>
        <h5>Studium im Fach Informationssysteme, -technologie (Diplom)   <small>09/2003 – 07/2008</small></h5>
        <p>
            Staatliche Universität für Wasserstraßenverkehrswege, Sankt-Petersburg<br />
            Staatliche Abschlussprüfung: <i>Sehr gut</i><br />
            Abschlussqualifikationsarbeit zum Thema "Entwicklung des Informationssystem aufgrund der XML- Technologie am Beispiel des RSS-Service": <i>Sehr gut</i>
        </p>
    </div>

    <div>
        <h5>Abitur   <small>06/2003</small></h5>
        <p>
            Gymnasium Nr. 397, Sankt-Petersburg mit Schwerpunkt Englisch
        </p>
    </div>

    <div class="row">
        <div class="col-sm-8" style="padding-right: 0px;">
            <h3>Kentnisse</h3>
            Beruflich habe ich mir hauptsächlich mit Web/Backend beschäftigt:<br />
            <strong>PHP</strong> (Symfony, Zend, Phalcon, ..), <strong>SQL</strong> (MySQL, Postgresql, SQLite), Betriebssystemen (<strong>Debian</strong>/CentOS/MacOS/Windows), VCS (<b>Git</b>, Mercurial, SVN) und <strong>noch viele</strong> dazugehörige Tools.
            <br /><br />
            Privat unterhalte ich mit allen möglichen technologien und Programmiersprachen:<br />
            Golang, Python, Haskell, C/C++, Java, MongoDB, Docker
        </div>
        <div class="col-sm-4" style="padding-left: 0px;">
            <h3>Sprachen</h3>
            <ul>
                <li>Deutsch - Gut</li>
                <li>English - Verhandlungssicher</li>
                <li>Russisch - Muttersprache</li>
            </ul>
        </div>
    </div>

    <div>
        <h3>Philosophie</h3>
        <p>
            Der Begriff Software Entwickler umfasst viel mehr als eine Person die Programme eintippt. Persönliche Charakterzüge sind manchmal sogar wichtiger als Programmierfähigkeiten.
        </p>
        <p>
            Für ein Software-Entwickler ist es wichtig eine freundliche und produktive <strong>Kommunikation</strong> mit Kollegen, Partner und Kunden zu haben. Ich arbeite nah mit Techsupport Kollegen, sodass die Kunden bei Technisch-komplexen Fragen eine relevante Information bekommen können, ich bin immer bereit zu helfen. Ich habe auch viel teilgenommen in Meetings mit Partner (z.B. auf ITB Messe) als auch Vortrage gegeben.
        </p>
        <p>
            Die <strong>Lösung-orientirte Denkweise</strong> und <strong>Selbständigkeit</strong> sind meine Vorteile. Ich habe mehrere Jahre von Zuhause gearbeitet. Setz mir das Ziel und ich kümmere mich darum. Ich kläre die Aufgabe mit relevanten Ansprechpersonen, plane, umsetze, teste und berichte.
        </p>
    </div>
</div>
</div>
{% endblock %}