---
layout: page
title: Recommended Readings
permalink: /recommended-readings/
---

Navigating the world of online harassment can be tricky, as one can get stuck on two questions: why do people do this and how can we fix it?

This list is intended to be a set of resources to help one understand the sociological phenomenon that is online harassment, what causes it, and helpful tactics to dispell misinformation.

Also includes some resources to protect yourself if you find yourself on the receiving end of harassment.

{% include search.html %}

---

{% for article in site.data.recommended-readings %}
    Title: {{ article.title }}
{% endfor %}    
