---
layout: resume
title: Résumé
---

{% block contents %}
<div class="row col-sm-12">
    <div id="cv-sidebar" class="col-sm-3">
        <div id="cv-photo-container">
            <img src="{{site.url}}/img/viktoras.jpg" id="cv-photo" alt="☺"/>
        </div>

        <h3>
            <span class="fw-600">VIKTORAS</span><br>
            <span class="fw-300">BEZARAS</span>
        </h3>

        <hr>

        <section>
            <div class="sidebar-section-header">CONTACT</div>

            <div id="cv-section-list-item">
                <div><i class="fas fa-envelope"></i>mail@viktoras.de</div>
                <div><i class="fas fa-phone"></i>+49 176 38930891</div>
                <div><i class="fas fa-map-marker-alt"></i>Leipzig, Germany</div>
                <div><i class="fas fa-globe"></i><a href="https://viktoras.de">viktoras.de</a></div>
                <div><i class="fab fa-github"></i><a href="https://github.com/viktoras25">github.com/viktoras25</a></div>
            </div>
        </section>

        <hr>

        <section>
            <div class="sidebar-section-header">LANGUAGES</div>

            <div id="cv-section-list-item">
                <div><i class="fas fa-flag"></i>English - fluent</div>
                <div><i class="far fa-flag"></i>Russian - native</div>
                <div><i class="fas fa-flag op-50"></i>German - fluent</div>
            </div>
        </section>

        <hr>

        <section>
            <div class="sidebar-section-header">HOBBIES</div>

            <div id="cv-section-list-item">
                <div><i class="fas fa-chess-king"></i>Chess</div>
                <div><i class="fas fa-dumbbell"></i>Sports</div>
                <div><i class="fas fa-gamepad"></i>Gaming</div>
            </div>
        </section>
    </div>

    <div id="cv-main" class="col-sm-9">
        <div class="section-header">Profile</div>

        <p id="cv-professional-profile">
            <span style="font-weight: 500">Hello, my name is Viktoras Bezaras.</span>
            I have been developing software professionally for over <span style="font-weight: 500">14</span> years, <span style="font-weight: 500">3</span> of which in leading positions.
            I'm passionate about teamwork and communication between developers, managers and stakeholders to ensure the project's success.
            I enjoy sharing knowledge to bolster professional growth of the team, as well as learning from others.
        </p>

        <section id="skills">
            <div class="section-header">Skills</div>

            <span class="badge badge-secondary" style="font-size: 1.1em">PHP</span>
            <span class="badge badge-secondary" style="font-size: 1.1em">SQL</span>
            <span class="badge badge-secondary" style="font-size: 1.1em">Javascript</span>
            <span class="badge badge-secondary" style="font-size: 1.05em">CSS</span>
            <span class="badge badge-secondary" style="font-size: 1.05em">Git</span>
            <span class="badge badge-secondary" style="font-size: 1.05em">Agile</span>
            <span class="badge badge-secondary" style="font-size: 1.05em">Laravel</span>
            <span class="badge badge-secondary" style="font-size: 1em">Symfony</span>
            <span class="badge badge-secondary" style="font-size: 1em">Linux</span>
            <span class="badge badge-secondary" style="font-size: 1em">PHPUnit</span>
            <span class="badge badge-secondary" style="font-size: 0.95em">SOLID</span>
            <span class="badge badge-secondary" style="font-size: 0.95em">Docker</span>
            <span class="badge badge-secondary" style="font-size: 0.95em">RabbitMQ</span>
            <span class="badge badge-secondary" style="font-size: 0.95em">Gitlab + CI/CD</span>
            <span class="badge badge-secondary" style="font-size: 0.95em">Redis</span>
            <span class="badge badge-secondary" style="font-size: 0.95em">Clean Architecture</span>
            <span class="badge badge-secondary" style="font-size: 0.9em">jQuery</span>
            <span class="badge badge-secondary" style="font-size: 0.9em">Zend Framework</span>
            <span class="badge badge-secondary" style="font-size: 0.85em">Python</span>
            <span class="badge badge-secondary">Ansible</span>
            <span class="badge badge-secondary">Scrum</span>
            <span class="badge badge-secondary">Postgresql</span>
            <span class="badge badge-secondary">SQLite</span>
            <span class="badge badge-secondary">Bootstrap</span>
            <span class="badge badge-secondary">Golang</span>
            <span class="badge badge-secondary">C/C++</span>
            <span class="badge badge-secondary">Phalcon</span>
        </section>

        <section id="experience">
            <div class="section-header">Working experience</div>

            <div class="position">
                <h5>CTO @ SportSpar GmbH, Leipzig   <small class="float-right">07/2019 - current</small></h5>

                <p>
                    SportSpar is an e-Commerce company processing thousands of orders per day. My tasks ranged from planing and high level technical decision making to designing a project architecture and hands-on development.
                </p>

                <ul>
                    <li>Hired, organised and managed a team of 7 developers</li>
                    <li>Established team-oriented agile development processes</li>
                    <li>Introduced quality standards and automated them via CI/CD processes</li>
                    <li>Designed and hands-on developed internal tools and projects</li>
                    <li>Developed and maintained infrastructure for internal projects</li>
                </ul>

                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">MariaDB</span>
                <span class="badge badge-secondary">Laravel</span>
                <span class="badge badge-secondary">RabbitMQ</span>
                <span class="badge badge-secondary">Javascript</span>
                <span class="badge badge-secondary">jQuery</span>
                <span class="badge badge-secondary">PHPUnit</span>
                <span class="badge badge-secondary">Software Architecture</span>
                <span class="badge badge-secondary">Git</span>
                <span class="badge badge-secondary">Agile</span>
                <span class="badge badge-secondary">Redis</span>
                <span class="badge badge-secondary">Gitlab CI/CD</span>
                <span class="badge badge-secondary">Youtrack</span>
                <span class="badge badge-secondary">Ansible</span>
            </div>


            <div class="position">
                <h5>Integrations Lead / Developer @ TraSo GmbH, Leipzig   <small class="float-right">05/2014 - 06/2019</small></h5>
                <p>
                    TraSo GmbH builds a backend software for tour operators to place billions of travel offers on the market every day.
                </p>

                <ul>
                    <li>Quickly worked into the legacy code without handover</li>
                    <li>Took over the dreaded Hotels-module and gradually improved it to be the most stable part of the system</li>
                    <li>Drastically reduced the amount of errors with thousands of Unit-Tests</li>
                    <li>Connected and maintained a multitude of new services/APIs, overall tripling their number</li>
                    <li>Took over customer and partner communication</li>
                    <li>Took over further domains: booking and transfer interfaces, OTDS export</li>
                    <li>Organised, took over and mentored the integrations team</li>
                </ul>

                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">MySQL</span>
                <span class="badge badge-secondary">Zend Framework</span>
                <span class="badge badge-secondary">PHPUnit</span>
                <span class="badge badge-secondary">Git</span>
                <span class="badge badge-secondary">Jira</span>
                <span class="badge badge-secondary">Stash</span>
                <span class="badge badge-secondary">Bamboo</span>
                <span class="badge badge-secondary">GitLab</span>
            </div>

            <div class="position page-break-before">
                <h5>Senior Developer @ meets-ecommerce GmbH, Niesky   <small class="float-right">06/2013 – 05/2014</small></h5>
                <p>
                    meets-ecommerce GmbH was an e-commerce startup with a vision to develop a management system for various sales platforms.
                </p>

                <ul>
                    <li>Designed and developed a microservice based application</li>
                    <li>Developed integrations with e-commerce platforms such as Magento</li>
                </ul>

                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">Postgresql</span>
                <span class="badge badge-secondary">Phalcon Framework</span>
                <span class="badge badge-secondary">RabbitMQ</span>
                <span class="badge badge-secondary">Git</span>
                <span class="badge badge-secondary">Redmine</span>
                <span class="badge badge-secondary">RobotFramework</span>
                <span class="badge badge-secondary">SCRUM</span>
            </div>

            <div class="position">
                <h5>PHP Developer @ netforge GmbH & Co. KG, Berlin    <small class="float-right">01/2011 – 04/2013</small></h5>
                <p>
                    netforge GmbH is a company with an online dating platform. For the internal processes the company needed an accounting management system.
                </p>

                <ul>
                    <li>Employed after successful work as an external contractor</li>
                    <li>Developed an accounting management system based on Symfony and Doctrine</li>
                    <li>Over time developed a variety of new features, including advertising modules, multi-tenancy, etc</li>
                    <li>Worked 100% remotely and independently</li>
                </ul>

                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">MySQL</span>
                <span class="badge badge-secondary">SQLite</span>
                <span class="badge badge-secondary">Symfony Framework</span>
                <span class="badge badge-secondary">Doctrine</span>
                <span class="badge badge-secondary">Lime (Test Framework)</span>
                <span class="badge badge-secondary">SVN</span>
                <span class="badge badge-secondary">Bootstrap</span>
            </div>

            <div class="position">
                <h5>PHP Developer @ WEB-SHOP-HOSTING, Berlin   <small class="float-right">03/2010 – 12/2010</small></h5>
                <p>
                    On my first projects in Germany I worked as a contractor. WEB-SHOP-HOSTING specializes in e-commerce hosting and web development.
                </p>

                <ul>
                    <li>Developed a Symfony-based CMS-System</li>
                    <li>Developed a Drupal-based Website for Teamdrive GmbH</li>
                </ul>

                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">MySQL</span>
                <span class="badge badge-secondary">SQLite</span>
                <span class="badge badge-secondary">Symfony Framework</span>
                <span class="badge badge-secondary">Drupal 7</span>
                <span class="badge badge-secondary">Mercurial</span>
            </div>

            <div class="position">
                <h5>PHP Developer @ RedFortress, Saint Petersburg   <small class="float-right">07/2008 – 03/2010</small></h5>
                <p>
                    RedFortress is a SEO and web development company.
                </p>

                <ul>
                    <li>Developed and maintained Pizza und Sushi delivery websites</li>
                    <li>Developed internal tools for SEO </li>
                </ul>

                <span class="badge badge-secondary">PHP</span>
                <span class="badge badge-secondary">CSS</span>
                <span class="badge badge-secondary">MySQL</span>
                <span class="badge badge-secondary">Javascript</span>
                <span class="badge badge-secondary">Symfony Framework</span>
            </div>
        </section>

        <section id="education">
            <div class="section-header">Education</div>

            <div>
                <h5>Postgraduate in computer science<small class="float-right">10/2008 – 09/2009</small></h5>
                <p>
                    Herzen State Pedagogical University (Abandoned to move to Germany)
                </p>
            </div>

            <div>
                <h5>Degree in information systems and technologies<small class="float-right">09/2003 – 07/2008</small></h5>
                <p>
                    State University for Waterways Communications, Saint Petersburg<br />
                    State Exam: <i>Excellent</i><br />
                    Final qualification thesis: "Development of the information system based using XML technology on the example of the RSS service": <i>Excellent</i>
                </p>
            </div>
        </section>
    </div>
</div>
{% endblock %}
