---
layout: post
title:  "What to Expect at Coding Bootcamp if You are Already a Developer"
date:   2015-11-14
author: Danielle Leong
comments: True
categories: blog
tags: coding bootcamp, full stack
excerpt: "Most bootcamps are geared towards non-technical folks who want to become a developer. But what if you already have experience? "
excerpt-photo: /img/posts/bootcamp.jpg
---

The last four years, I've been working as a front end web developer. I enjoy making things functional and intuitive to use. I love a well-designed website with pleasing UI that isn't overly minimalistic (honestly, sometimes an icon *needs* to look more like what it represents in the real world in order for me to know what it does). But... I needed more. How does data flow through an application before it spits out a json string for me to format? I had to know more.

As a self-taught engineer, I don't have a Computer Science background. While I had a procedural understanding of how large-scale websites work, I didn't have enough of a vocabulary to be able to explain how and why MVC frameworks work, or the intricacies of HTTP requests. I just knew how to use them, for the most part. Oh and algorithms. Why must there always be algorithms?

And that's where coding bootcamp comes in. I've just finished week 2 of 4 at <a href="http://www.codingdojo.com/web-development-accelerators">Coding Dojo's Developer Accelerator Program in Python</a> and here's what I've learned:

##Algorithms are hard and you need to keep doing them even though you don't want to and they might be useless##
We do algorithms every day at 9am (9am!) on whiteboards in groups. It's a pain in the ass, but they're necessary for job interviews. What's kind of amazing is that an algorithm that used to take me hours/days last year now takes me 15 minutes. Practice is key! Although I'm still fairly skeptical that we will never actually need algorithms in real life, I'll keep doing them for the sake of passing those interviews. One thing that I would like to see is more emphasis on practicing the Big O notation. So far we haven't covered it at all, and I'm halfway through my program.

##Just because you have experience doesn't mean you're better##
There's a temptation to think that some of the assignments are a waste of time because they can be simple or you've done them before. But there's always something to learn, no matter what. Check yoself, do the assignment, then *make it better*. Would your tech lead let you push this basic code to production? No? Then make your tech lead proud and make the app better than what your instructors are expecting.

This past week, I wrote a Flask app that created a message board with comments. The assignment expected the students to loop through and do a SQL query for every comment. Because making excessive calls to the database will slow down and kill your app, I rewrote the app to get all the data using only two SQL queries and <a href="https://github.com/dmleong/coding-dojo/blob/master/week2/the-wall/server.py#L144">combined the data to create a nested dictionary</a> that would render on the front end. It surprised and exceeded the instructors' expectations and I found a way to use my prior knowledge and experience useful. (Edit: Code reviews are so important. I showed this to a senior developer friend and they suggested I could be much more efficient. I struggled, they helped, I struggled more, and I eventually got to a better understanding of dictionaries. Code reviews are awesome! And hard. But ultimately excellent. Thanks, Alan!)

You should also strive to help your classmates understand the material if they need help. While you are not the instructor (nor should you try to be the instructor right now!), being able to explain the concepts and help your classmates debug their apps if they ask you for help will help solidify your understanding of the material and help the group move forward. Helping others is a good thing.

##Python is great##
<a href="https://xkcd.com/353/"><img src='/img/posts/xkcd-python.png' alt="xkcd python antigravity comic" /></a>

##Coding bootcamps just aren't geared towards current developers yet##
While I'm learning a lot, the majority of coding bootcamps out there are geared towards non-technical folks who are looking to make a career switch. At least at Coding Dojo, most of the instructors seem to be graduates of the program and don't have a lot of experience working with production level code.

**Here's some things that I would love to see:**
<ul>
<li>Unit tests</li>
<li>Big O notation</li>
<li>Scaling applications beyond just getting it done</li>
<li>Code reviews</li>
<li>Naming conventions and code standards</li>
<li>More rigorous use of Git</li>
<li>Setting up dev environments</li>
</ul>

Since I'm the only person in the Developer Accelerator program, I was thrown into a current cohort full of beginners. While I'm definitely still learning a lot, it would have been nice to have some sort of customization for a program that was advertised to be for current developers.

##Diversity is still lacking, even in bootcamps##
One of the great things about my cohort is we are definitely the most diverse cohort to date, and we work together amazingly well. There's a decent spread of ages, races, gender, and religion, beyond the 25 year old white het Christian male. The instructors definitely tried to choose a more diverse cohort and it shows. However, I would really love to see more diverse instructors. All the instructors are male, mostly white or Asian, and none are openly queer. As it is, all the coding examples are always done using male names, functions are always referred to as "he", and relationships are always between men and women. There's no mother's room or a dedicated prayer room, so the students who need to pray during the day must do it in random corners of the classroom each day. There was also an incident after hours when students in other cohorts were playing video games and loudly calling each other "f-gs" and "c-nts". I was uncomfortable, so I left early even though I still had work to do.

When I was researching bootcamps to go to, I really wanted to go to Hackbright Academy, but they discontinued their full stack developer accelerator program right after I applied. They have an excellent reputation for diversity and inclusion, and I hope to see more bootcamps following their example.

##Conclusion##
All in all, I've learned more in the last two weeks than I have in the last year of trying to learn full stack development on my own. There are a lot of improvements that I would like to see, but so far it's been a worthy investment in myself and my career. If you're able to afford it, I would definitely recommend it for current developers if your career has plateaued and you want to learn new skills. I was hesitant at first because they are *really* expensive, especially if you're unemployed, but I think that the skills I've learned so far have been worthwhile.

If you're curious, please follow along with my progress <a href="https://github.com/dmleong/coding-dojo">here</a>! I graduate on Thanksgiving and will be looking for new and exciting opportunities then!
