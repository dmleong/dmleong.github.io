---
layout: post
title:  "From Flask to Django: The Awkward Puberty of MVCs/MTVs"
date:   2015-11-29
author: Danielle Leong
comments: True
categories: blog
tags: coding bootcamp, full stack, django, python, flask
excerpt: "Moving from clarity to confusion, I discuss what it's like to learn Django for the first time"
excerpt-photo: /img/posts/steven-universe-what.png
---

I love a good MVC. The code is clean, compartmentalized, and generally you know where everything's supposed to be on the first time around. Everything just makes sense. I really enjoyed learning Flask and Pylot (Coding Dojo’s own MVC that’s based on Flask) and can now make a full stack web app with a database in about 3 hours.  But I also wanted to learn Django since I’ve heard so much about it. So, leaving the warm confines of a MVC that made sense, I hurled headlong into the awkward, confusing, frustrating world of second adolescence Django.

Django reminds me of when I was a gauche teen hanging out with my older sister and her supremely cool college friends. I technically knew how to human, but I definitely wasn’t doing anything exactly right the first time. With Django, I feel like the framework is merely tolerating my presence until I grow into it (and sit down and read the docs from beginning to end).

Here’s a list of lessons learned moving from Flask/Pylot to Django:

- Compartmentalization of apps makes sense, but why so many directories? Need to write a bash script to streamline this

- The separation of URLConf/app urls are confusing the first several times around. Plus there seems to be several hundred ways to import a view, which gets confusing

- Views now explicitly ask for requests and responses. If you’re not 100% solid on HTTP request/responses, this will trip you up.

- Sessions are not callable in the template. Why.

- Sessions are requests!

- SESSIONS CAN’T BE AN EMPTY LIST. WHY.

- Why are there so many different ways to render a template? What is the difference between render and render_to_response?

- Named URLs are pretty damn awesome

- Form validation, csrf tokens, and cleaned data <3 but remember it’s request.POST[‘field_name’]. Also being able to make a form from a model is basically the most amazing thing ever, but adding session data as placeholders just makes life unnecessarily complex

- Creating a database through models is pure magic, but how do I print an expanded database object? OH MY GOD WHY DIDN'T ANYONE TELL ME ABOUT THE ADMIN DASHBOARD

It’s important to add __str__() methods to your models, not only for your own convenience when dealing with the interactive prompt, but also because objects’ representations are used throughout Django’s automatically-generated admin.

