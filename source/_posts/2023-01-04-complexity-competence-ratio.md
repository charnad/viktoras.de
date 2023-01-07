---
title: Complexity / competence ratio
description: Keeping the project stable as the complexity grows.
tags: [management]
categories: []
published: false
language: en
post_date: 04.01.2023
---

During a discussion with a colleague, I once mentioned a problem I've started noticing - the complexity of the project started to exceed our current level of competence. I called it a competence/complexity ratio. A software company, as a living organism, constantly changes: you hire new people, some people with knowledge leave, you build new features, you refactor. Both, the complexity and the overall competence of the team change over time. If complexity over competence ratio becomes greater than 1 (meaning complexity > competence), it can become a serious issue for the project's well-being. I liked this term so much, that I wanted to explore the idea further.

<!--more-->

Let's first clarify what is complexity and what is competence. Wikipedia article about [programming complexity][1] explains it neatly: "There is a distinction between the terms complex and complicated. Complicated implies being difficult to understand but, with time and effort, ultimately knowable. Complex, on the other hand, describes the interactions between a number of entities.". So, low complexity means the project is small, easy to handle, even if the underlying business logic may not be simple. High complexity means it's just too much to deal with, and you start sweating trying to change even the littlest of things.

Competence is a loosely defined term, since it's always relative. Some developer may be competent enough to accomplish a given task quickly, effectively, with long-term working result. A different developer may struggle to deliver the same level of result, due to lacking technical skills, domain knowledge or even plainly prudence. We can broadly define three categories on the competence axis: lacking competence, appropriate competence and expert competence. A lacking competence does not necessarily mean you didn't know better, it could also mean you didn't do better for whatever reason it might be. In other words, it can be characterized as quality of work.

Now, combining these categories into complexity / competence matrix, we get this:

<div class="text-center">
    <img class="img-fluid" src="/img/posts/2023-01-04-complexity-competence-ratio/1-complexity-competence-matrix.svg" alt="Complexity/competence matrix">
</div>

Each cell describes, how a software project may look like at this level of complexity and developer's competence. During a project's lifetime it can, of course, go through different stages. Some are more stable, some are more transitional. Let me describe a small project I did years ago. It started off as a one-file monitoring script, with hard-coded credentials, that just did the work. I didn't want to spend a lot of time and threw together what worked for me then. That would fit into top-left, low complexity and low competence, based on mediocre quality of the code. The project proved itself to be very useful, so I refactored it, added a proper configuration file. With this, the project moved into top-middle state of average competence, but still maintaining low complexity. Over time happened what usually happens, users liked the product and demanded more features. I added requested features, increasing the project complexity, but adhering to good coding practices and keeping the structure clean. The project moved into the middle cell, where it remains.

I draw the following conclusions from this little story:

- Complexity tends to increase over time, as the project grows.
- To reduce complexity, you need to take measures to improve structure and architecture of the project.
- The competence was always higher than the complexity, so the project was never at risk. 

<div class="text-center">
    <img class="img-fluid" src="/img/posts/2023-01-04-complexity-competence-ratio/2-project-development.svg" alt="Project development paths">
</div>

Let's imagine how the same project could've evolved further if a different developer would take over. The project continues to grow with new features, and as we figured out, complexity grows with it. On the image above, initial development is indicated by a blue arrow. If the developer has enough competence to recognize the threat and mitigate it with high-quality work, that would first place the project into the bottom right cell. From there it will either move to manageable complexity, or average competence. A high-complexity/average competence combination is also not a stable state, due to [software rot][2]. With active effort, once again, the complexity can be reduced - green arrow, or the project will eventually move to disaster phase - red arrow.

Findings from this story are:
- Active efforts are required to counteract complexity growth.
- As complexity grows, higher competence is required to keep the project stable.
- If complexity is higher than competence, the project will slide left and down, where the eventual stop is disaster.

[1]: https://en.wikipedia.org/wiki/Programming_complexity
[2]: https://en.wikipedia.org/wiki/Software_rot
