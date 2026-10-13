---
layout: page
title: Recommended Readings
permalink: /recommended-readings/
---

Navigating the world of online harassment can be tricky, as one can get stuck on two questions: why do people do this and how can we fix it?

This list is intended to be a set of resources to help one understand the sociological phenomenon that is online harassment, what causes it, and helpful tactics to dispel misinformation.

<p>Search by title, tag, category, or keyword.</p>

<input type="text" id="search-input" placeholder="Search" aria-label="Search recommended readings">

<p id="reading-count">{{ site.data.recommended-readings.size }} readings</p>

<ul id="reading-list">
  {% for article in site.data.recommended-readings %}
  <li class="reading">
    <a href="{{ article.url }}">{{ article.title }} [{{ article.category }}]</a>
    <ul>
      <li>{{ article.description }}</li>
      <li>Tags: {{ article.tags }}</li>
    </ul>
  </li>
  {% endfor %}
</ul>

<p id="no-results" hidden>No readings match your search.</p>

<script>
(function () {
  var input = document.getElementById('search-input');
  var items = [].slice.call(document.querySelectorAll('#reading-list .reading'));
  var count = document.getElementById('reading-count');
  var noResults = document.getElementById('no-results');

  // Cache the lowercased searchable text (title, category, description, tags) per reading.
  items.forEach(function (li) { li.dataset.search = li.textContent.toLowerCase(); });

  function label(n) { return n + (n === 1 ? ' reading' : ' readings'); }

  function filter() {
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    items.forEach(function (li) {
      var match = q === '' || li.dataset.search.indexOf(q) !== -1;
      li.hidden = !match;
      if (match) { shown++; }
    });
    count.textContent = label(shown);
    noResults.hidden = shown !== 0;
  }

  input.addEventListener('input', filter);
})();
</script>
