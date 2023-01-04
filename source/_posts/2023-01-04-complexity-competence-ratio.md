---
title: Complexity / competence ratio
description: How to know where are you going.
tags: [management]
categories: []
post_date: 04.01.2023
---

During a discussion with a colleague I once mentioned a problem I've started noticing - the complexity of the project started to exceed our current level of competence. I called it a competence/complexity ratio. A software company, as a living organism, constantly changes: you hire new people, some people with knowledge leave, you build new features, you refactor. Both, the complexity and the overall competence of the team change over time. If complexity over competence ratio becomes greater than 1 (i.e. complexity > competence), it can become a serious problem for the project's well-being. I liked this term so much, that I wanted to explore the idea further.

<!--more-->

Let's first talk a little bit about what is complexity and what is competence. Wikipedia article about [programming complexity][1] explains it neatly: "There is a distinction between the terms complex and complicated. Complicated implies being difficult to understand but with time and effort, ultimately knowable. Complex, on the other hand, describes the interactions between a number of entities.". So, low complexity means the project is small, easy to handle, even if the underlying business problem may not be simple. High complexity means it's just too much to deal with and you start sweating trying to change even the littlest of things.

Competence is a loosely defined term, since it's always relative. Some developer may be competent enough to accomplish a task quickly, effectively, with long-term working result. A different developer may struggle to deliver same level of result, due to lacking technical skills, domain knowledge or even plainly prudence. We can broadly define three categories on the competence axis: lacking competence, appropriate competence and expert competence.

Now, combining these categories into complexity / competence matrix we get this:

<div class="text-center">
    <img class="img-fluid" src="/img/posts/2023-01-04-complexity-competence-ratio/1-complexity-competence-matrix.svg" alt="Complexity/competence matrix">
</div>

[1]: https://en.wikipedia.org/wiki/Programming_complexity
