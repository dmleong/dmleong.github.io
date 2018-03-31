---
layout: page
title: Recommended Readings
permalink: /recommended-readings/
---

Navigating the world of online harassment can be tricky, as one can get stuck on two questions: why do people do this and how can we fix it?

This list is intended to be a set of resources to help one understand the sociological phenomenon that is online harassment, what causes it, and helpful tactics to dispell misinformation.


{% include search.html %}

---

<details>
  <summary>See full list of recommended reads ({{site.data.recommended-readings.size}})</summary>
  {% for article in site.data.recommended-readings %}
  <p><a href="{{article.url}}">{{article.title}} [{{article.category}}]</a></li>
    <ul>
      <li>{{article.description}}</li>
      <li>Tags: {{article.tags}}</li>
    </ul>
  </p>
  {% endfor %}    
</details>
