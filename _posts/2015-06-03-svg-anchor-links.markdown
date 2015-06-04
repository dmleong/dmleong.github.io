---
layout: post
title:  "How to add smooth scrolling to SVG anchor links"
date:   2015-06-03
author: Danielle Leong
comments: True
categories: blog
tags: frontend, front end, anchor links, svgs
excerpt: "SVGs anchor links are weird."
excerpt-photo: /img/posts/anchor.jpg
---

If you've done any frontend work, you know that SVGs are <s>the new hotness</s> what you should be using for just about everything. They're vector images that are easily scalable and relatively small in file size, making them a no brainer to use with retina screens and mobile devices. 
 
I was working on a problem this week and ran into a roadblock. The goal was to make this diagram: 

<div style="background-color: #282E32; height: 400px; width: 400px; text-align: center"><svg style="width: 400px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526 526" enable-background="new 0 0 526 526"><g><path fill="#4E6C80" d="M263 0C117.7 0 0 117.7 0 263s117.7 263 263 263 263-117.7 263-263S408.3 0 263 0zm0 476c-117.4 0-213-95.6-213-213S145.6 50 263 50s213 95.6 213 213-95.6 213-213 213z"/><path fill="#564E5D" d="M263 50C145.6 50 50 145.6 50 263s95.6 213 213 213 213-95.6 213-213S380.4 50 263 50zm0 376c-89.9 0-163-73.1-163-163s73.1-163 163-163 163 73.1 163 163-73.1 163-163 163z"/><path fill="#AA9463" d="M263 100c-89.9 0-163 73.1-163 163s73.1 163 163 163 163-73.1 163-163-73.1-163-163-163zm0 276c-62.3 0-113-50.7-113-113s50.7-113 113-113 113 50.7 113 113-50.7 113-113 113z"/><path fill="#fff" d="M279.6 277l-.1-1c.5-.1 11.1-1.6 11.1-12.3 0-3.4-1.3-6.5-3.8-8.9-2.4-2.3-5.6-3.6-9-3.4h-.3l-.1-.3c-2.9-6.1-9.1-10-15.8-10-9.2 0-16.9 7.2-17.4 16.4v.6l-.6-.1c-2.7-.6-5.5.1-7.6 1.9-2.1 1.7-3.4 4.3-3.4 7.1 0 7.5 6.3 8.8 8.9 9.1l-.1 1c-2.3-.2-9.9-1.5-9.9-10.1 0-3.1 1.4-5.9 3.7-7.9 2.2-1.8 5.1-2.6 7.9-2.2.8-9.5 8.8-16.8 18.4-16.8 7 0 13.4 4 16.5 10.3 3.5 0 6.9 1.3 9.4 3.7 2.6 2.5 4.1 6 4.1 9.6.1 11.6-11.8 13.3-11.9 13.3zM261.3 257.5c-6.3 0-11.4 5.1-11.4 11.4 0 6.3 5.1 11.4 11.4 11.4 6.3 0 11.4-5.1 11.4-11.4.1-6.3-5.1-11.4-11.4-11.4zm0 19.8c-4.7 0-8.4-3.8-8.4-8.4s3.8-8.4 8.4-8.4c4.7 0 8.4 3.8 8.4 8.4s-3.7 8.4-8.4 8.4z"/><circle fill="#fff" cx="264.2" cy="266.1" r="2.4"/><circle fill="#fff" cx="264.2" cy="271.8" r="2.4"/><circle fill="#fff" cx="258.5" cy="271.8" r="2.4"/><circle fill="#fff" cx="258.5" cy="266.1" r="2.4"/><path fill="#ff9" d="M263 150c-62.3 0-113 50.7-113 113s50.7 113 113 113 113-50.7 113-113-50.7-113-113-113zm0 176c-34.7 0-63-28.3-63-63s28.3-63 63-63 63 28.3 63 63-28.3 63-63 63z"/></g></svg></div>

And link each one of the rings to an anchor link further down the page and add some animation to create a smooth scrolling effect. 

But it turns out that making concentric svg rings that link to anchor points and have an animation is much more irritating than one would think. 

Layering svgs on top of one another presents problems when you try to link them, because the clickable areas overlap, with the largest ring overlapping all of the others. After a while, I saved each one of the rings as an svg using Illustrator and pasted the code making the rings directly into the page (you only need the path). Then I wrapped each path with an anchor link using `xlink:href` (svgs are <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href">special snowflakes</a> like that).  

{% highlight php linenos %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 228" enable-background="new 0 0 228 228">
	<g transform="scale(.4) translate(180,120)">
		<a xlink:href="#link1">
			<path fill="#ff9" d="M114 1C51.7 1 1 51.7 1 114s50.7 113 113 113 113-50.7 113-113S176.3 1 114 1zm0 176c-34.7 0-63-28.3-63-63s28.3-63 63-63 63 28.3 63 63-28.3 63-63 63z"/>
		</a>
	</g>
	<g transform="scale(.4) translate(130,70)">
		<a xlink:href="#link2">
			<path fill="#AA9463" d="M164 1C74.1 1 1 74.1 1 164s73.1 163 163 163 163-73.1 163-163S253.9 1 164 1zm0 276c-62.3 0-113-50.7-113-113S101.7 51 164 51s113 50.7 113 113-50.7 113-113 113z"/>
		</a>
	</g>
	<g transform="scale(.4) translate(80, 20)">
		<a xlink:href="#link3">
			<path fill="#564E5D" d="M214 1C96.6 1 1 96.6 1 214s95.6 213 213 213 213-95.6 213-213S331.4 1 214 1zm0 376c-89.9 0-163-73.1-163-163S124.1 51 214 51s163 73.1 163 163-73.1 163-163 163z"/>
		</a>
	</g>
	<g>
		<a xlink:href="#link4">
			<path fill="#4E6C80" d="M263,0C117.7,0,0,117.7,0,263s117.7,263,263,263s263-117.7,263-263S408.3,0,263,0z M263,476 c-117.4,0-213-95.6-213-213c0-117.4,95.6-213,213-213s213,95.6,213,213C476,380.4,380.4,476,263,476z"/>
		</a>
	</g>
</svg>
{% endhighlight %}

Then I tried to use the following Javascript to add smooth scrolling to the anchor links: 

{% highlight javascript linenos %} 
$(document).ready(function() {
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
	
		var target = this.hash;
		var $target = $(target);
	
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});

{% endhighlight %}

This didn't work because of our delightful `xlink:href` ! So I changed it to: 

{% highlight javascript linenos %} 
$(document).ready(function() {
	$('a[*|href^="#"]').on('click',function (e) {
		e.preventDefault();
	
		var target = $(this).attr('xlink:href');
		var $target = $(target);
	
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});
{% endhighlight %}

This way we're able to target all of the anchor links on the page, if they're `xlink:href` style or just normal anchor links. `.hash()` doesn't work with `xlink:href` so we use `$(this).attr('xlink:href')` to grab the anchor link. Then we scroll to the anchor link's position based on the coordinates of the element we're linking to.

Hope this helps! Happy anchor linking! 
