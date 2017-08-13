---
title: Forget about DRY
tags: []
categories: []
post_date: 13.08.2017
---

I've once had a heated duscussion with colleagues, which eventually motivated me to write this blog post. This is about DRY principle, being oh so loved by many developers. I'm however convinced, that many do not really understand what does this principle really promote. DRY suffers from what I would call an "imprinting fallacy" (trying to mimick senior colleagues, while taking barely understood concepts to extreme), the same way the Singleton design pattern does.

An inexperienced developer, lets say Joe, starts working in a team, where words like "design patterns" are frequently heard. Joe looks through some online articles and sees a lot of scary words and schemes. But then a simple enough approach pops up - a single instance of some class. So Joe uses Singleton extensively, as he thinks it makes him a more senior developer, because he now uses a design pattern. He does not know about all the hidden flaws he's adding to the project. Same goes for DRY. It's deceptively easy to understand. DRY - Don't repeat yourself, don't duplicate code, what's more to it? The same Joe, is happy to use a programming principle he has heard about. He vigorously finds out all repeating lines of code and extracts them into separate (usually into static methods) classes. Well, he is most likely damaging the project once again. 
<!--more-->

DRY principle is most likely absolutely not what you think it is. The idea comes from the book "The Pragmatic Programmer" by Andrew Hunt and David Thomas and is defined as follows:

<blockquote>Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.</blockquote>

It's not about duplicating code, the idea behind is far grander.[^1] It is to have one single knowledge source, so that changes to project requirements would only affect that source. The rest - data storage, UI, code, documentation should tap into this source and update accordingly. Because if they don't, then your project is full of duplication. Code represents the same knowledge documentation does, but in a machine readable way, rather that a human readable. UI form duplicates database structure, because it needs to have all the same fields. Even the comments in your code duplicate some knowledge, because they also can get outdated.

Alright, but what about code duplication, there is nothing good about it. Think for a moment, what is so bad about it? If you change some code, you would likely need to update a duplicated part, so that a system remain consistent. This means more work and potentially inconsistent behaviour. This problem is actually bigger than that. What if a change to the code in one place requires a change in another place even if there is no apparent duplication? Same thing, more work and potentially buggy software. It's not the duplication itself which causes problems, it's connascence.[^2]

You all have probably heard about cohesion and coupling, software quality metrics which help to reason about quality of the code.



[^1]: <a title="A Conversation with Andy Hunt and Dave Thomas by Bill Venners" href="http://www.artima.com/intv/dry.html">A Conversation with Andy Hunt and Dave Thomas by Bill Venners</a>
[^2]: <a title="Connascence" href="https://en.wikipedia.org/wiki/Connascence_(computer_programming)">Connascence - Wikipedia</a>
