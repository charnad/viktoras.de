---
layout: default
title: Lebenslauf
---

{% block invader %}
<div style="padding-top: 3em;"/>
{% endblock %}

{% block posts %}

<div class="col-xs-3 text-center">
    <img src="" class="img-thumbnail" style="border: 1px; height: 200px; width: 200px;">

    <h1>Viktoras Bezaras</h1>

    <p class="align-center">
        <div class="row">
            <h1 class="glyphicon">&#x1F382;</h1>
        </div>
        25.09.1986 - {{ date(now).diff(date("1986-09-25")).y }} Jahre
    </p>

    <p class="align-center">
        <div class="row">
            <h1 class="glyphicon">&#xe135;</h1>
        </div>
        Kasseler Str. 37, 04155 Leipzig, Deutschland
    </p>

    <p class="align-center">
        <div class="row">
            <h1 class="glyphicon">&#x2709;</h1>
        </div>
        charnad@gmail.com
    </p>
</div>

<div class="col-xs-9">
    <div>
        <h3>&#x25A3; Arbeitserfahrung</h3><hr />
    </div>

    <div style="margin-bottom: 3em;">
        <h4>Anwendungsentwickler @ TraSo GmbH, Leipzig   <small>05/2014 - aktuel</small></h4>
        <p class="text-justify">
            Bei TraSo habe ich im Mai 2014 angefangen als Entwickler im Bereich Hotel Import für eine Backend Enterprise Software für Touristische Veranstalter. Meine Vorgänger haben sich einige Monaten zuvor verabschiedet und ich musste dringend mich in Legacy Code ohne jegliche Übergabe einarbeiten. Hotel Import Bereich war damals der Schmerzpunkt und die Hauptaufgabe war die Stabilität und Qualität der Datenverarbeitung zu erreichen. Ich und meine QA-Kollegin haben die Verantwortung, Kunden- und Partner Kommunikation übernomen und innerhalb 2 Jahren haben den Bereich komplett umgebaut. Mit über 1000 Unit-Test hat das Anteil des Bugfix-Tickets von ~90% auf ~10% gesunken, die meisten Aufgaben beziehen sich jetzt auf die neue Features. Obwohl die Anzahl der Import Anbindungen hat sich seit 2014 mehr als verdreifacht, schaffen wir immer noch zuzweit die Arbeit, was am Anfang für 4-5 Mitarbeiter gedacht wurde. Parallel dazu habe ich weitere Aufgaben übernommen wie: Buchungschnittstellen-Anbindungen, Transferschnittstellen-Anbindungen, OTDS Export.
            <br /><br />
            Tools und Technologien: PHP5/HHVM, MySQL, Zend Framework, PHPUnit, Atlassian Stack (Jira, Stash, Bamboo), GitLab, Git.
        </p>
    </div>

    <div style="margin-bottom: 3em;">
        <h4>Senior Web-Entwickler @ meets-ecommerce OA GmbH, Niesky   <small>06/2013 – 05/2014</small></h4>
        <p class="text-justify">
            Die Firma meets-ecommerce war ein Startup mit 5 Mitarbeiter. Wir haben projektiert und entwickelt eine RESTlike Microservices Basierend Application mit Anbindungen an e-commerce Plattformen Schnittstellen wie Magento und eBay. Trotz der Kollegen verlassen, bis wir zwei mit dem Eigentümer geblieben, habe ich gearbeitet und mein Bestens gegeben bis die Firma leider geschlossen wurde.
            <br /><br />
            Tools und Technologien: PHP5, Phalcon Framework, Postgresql, RabbitMQ, RobotFramework, Redmine, Git, SCRUM.
            <br /><br />
            <a href="{{site.url}}/files/meets-ecommerce.pdf">Arbeitszeugnis</a>
        </p>
    </div>

    <div style="margin-bottom: 3em;">
        <h4>PHP-Entwickler @ netforge GmbH & Co. KG, Berlin    <small>01/2011 – 04/2013</small></h4>
        <p class="text-justify">
            Bei netforge habe ich als Angesteller angefagen nach erfolgreiche Zusammenarbeit als Consultant. Als meine Hauptaufgabe, habe ich ein featurevolles Rechnungs-Steuersystem auf Basis Symfony Framework entwickelt. Ich habe die ganze Zeit vom Home Office in Görlitz gearbeitet mit der Kommunikation über Skype.
            <br /><br />
            Tools und Technologien: PHP5, Symfony Framework, MySQL, SQLite, Lime (Test Framework), SVN.
            <br /><br />
            <a href="{{site.url}}/files/netforge.pdf">Arbeitszeugnis</a>
        </p>
    </div>

    <div style="margin-bottom: 3em;">
        <h4>PHP-Entwickler (Freiberufler) @ WEB-SHOP-HOSTING, Berlin   <small>03/2010 – 12/2010</small></h4>
        <p class="text-justify">
            An meine erste Projekte in Deutschland habe ich als Freiberufler gearbeitet. Für WEB-SHOP-HOSTING habe ich ein Symfony-basierend CMS-System entwickelt (genutzt für z.B. http://wir-nehmen-wir.net). Ein anderes Projekt war Weiterentwicklung der Drupal-basierenden http://www.teamdrive.com Webseite.
            <br /><br />
            Tools und Technologien: PHP5, Drupal 7, Symfony Framework, MySQL, SQLite, Mercurial.
            <br /><br />
            <a href="{{site.url}}/files/web-shop-hosting.pdf">Arbeitszeugnis</a>
        </p>
    </div>

    <p>
        <h4>PHP-Entwickler @ RedFortress, Sankt-Petersburg   <small>07/2008 – 03/2010</small></h4>
        <p>Bei meiner ersten "echten" Stelle habe ich die existierende Pizza und Sushi Bestellungsseiten Unterstützt, als auch Skripte für SEO gebaut.</p>
    </p>

    <p>
        <h3>&#x25A3; Ausbildung</h3><hr />

        <div style="margin-bottom: 3em;">
            <h4>Aspirantur in Informatik   <small>10/2008 – 09/2009</small></h4>
            <p class="text-justify">
                Russische Staatliche Pädagogische Herzen-Universität (Unbeendet wegen Umzugs nach Deutschland)
            </p>
        </div>

        <div style="margin-bottom: 3em;">
            <h4>Studium im Fach Informationssysteme, -technologie (Diplom)   <small>09/2003 – 07/2008</small></h4>
            <p class="text-justify">
                Staatliche Universität für Wasserstraßenverkehrswege Sankt Petersburg<br />
                Staatliche Abschlussprüfung: <i>Sehr gut</i><br />
                Abschlussqualifikationsarbeit zum Thema "Entwicklung des Informationssystem aufgrund der XML- Technologie am Beispiel des RSS-Service": <i>Sehr gut</i>
            </p>
        </div>

        <div style="margin-bottom: 3em;">
            <h4>Abitur   <small>06/2003</small></h4>
            <p class="text-justify">
                Gymnasium Nr. 397, Sankt-Petersburg mit Schwerpunkt Englisch
            </p>
        </div>
    </p>

    <p>
        <h3>&#x25A3; Kentnisse</h3><hr />
        Sprachen: 
        Deutsch - Gut
        English - Sehr gut
        Russisch - Muttersprache
    </p>

    <p>
        <h3>&#x25A3; Interesse und Hobbys</h3><hr />
        Fitness
    </p>
</div>
{% endblock %}
   