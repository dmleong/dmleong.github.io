---
layout: post
title:  "What's an object?"
date:   2014-12-07 14:39:12
author: Danielle Leong
comments: True
categories: blog
excerpt: "You'd think that I would know what an object in Object Oriented Programming was." 
excerpt-photo: /img/posts/magnets.jpg
---

##tl;dr##
>Object Oriented Programming (OOP) is an incredibly important concept that is incredibly difficult to explain to a new person. This post will attempt to break down the concept of OOP into plain English.

###Objects. How do they even work? ###
<img src="/img/posts/magnets.jpg" alt="Magnets." />

When I started programming, the term Object Oriented Programming (OOP) was being thrown around constantly, but the plethora of knowledge out there on the internet doesn't always take into consideration that *newbies don't know how to read technical documentation*. Technical documentation, even that which is aimed at new programmers, often forgets to take into consideration the basics that one is "supposed to know". One of these things, I found, was as simple as explaining what an object is. 
 
Even when you search on Google, it tells you that there's no way you can sum it up easily: 

<img src="/img/posts/ooo.png" alt="Google even says more info needed"/>

The <a href="http://docs.oracle.com/javase/tutorial/java/concepts/object.html">Oracle article</a> is actually quite interesting, but I'll give an example that finally made everything click for me. 

For this lesson, we're going to need to be familiar with the following terms: 

* Class
* Constructor
* Object
* Instance 
* Function

And because I like baking, I'll use the class `Recipe`. And because my main language is PHP, this example is going to be in PHP. I know nobody likes PHP, but it's an easy beginner language, so bear with me! 


{% highlight php linenos %}
<? php

class Recipe {
	public $flourCups;
	public $sugarCups;
	public $butterSticks;
	public $goodsMade;
	public $bakeTemp;

	public function __construct() {
		$this->bakeTemp = "350 degrees Fahrenheit";
	}
}

class Cookie extends Recipe {
	var $flourCups = 3;
	var $sugarCups = 3;
	var $butterSticks = 2;

	function bake() {
		$this->goodsMade = ($this->flourCups + $this->sugarCups + $this->butterSticks) * 3;
		return $this->goodsMade . " cookies made";
	}
}

$sugarCookie = new Cookie();
$sugarCookie->bake();
//Returns "24 cookies made"

{% endhighlight %}


###Class###
In this example, `Recipe` is an example of a `Class`. A `Class` is your source of truth or set of basic instructions for the thing you're trying to make. For every baked good recipe out there, we have your basic ingredients, called `variables`. Things like flour, sugar, and butter are going to be in just about every recipe out there. Since we know that these ingredients are always going to be in every recipe we use, we make them global variables in our `Recipe`. Global variables are available every time you use this class.

###Constructor###
Your `Constructor` (line 10 contains instructions on how you want to *build* your `Class`. In this case, we bake everything at 350 degrees F. 

###Object###
The `Object` here is the `new Cookie()` on line 26. Here, we are using our original instructions in `Recipe` (take your flour, sugar, and butter) and specifying how many cups of each are needed in this specific `Object` of `$sugarCookie`. It an *instantiation* of your original `Recipe`, which means you're cloning your `Class` (Recipe) and modifying it to fit your `Object`'s needs (Cookie). 

###Instance###
Your `Instance` is `$sugarCookie = new Cookie()` on line 37. Think of them as "this specific batch of baked items" or "a specific `Object` we've built".

###Function### 
Your `Function` here is `bake()`, (sometimes called a `Method`). I like to think of them as verbs. They do things to the variables. Our functions should always be small and reusable. In this case, `bake()` adds our ingredients together and we do some pseudo baking math to get the number of baked goods the recipe makes. 

##Multiple classes##

Now if we want to add another instance of our `Recipe` we can create a `Brownie` object. 

{% highlight php linenos %}
<? php
class Recipe {
	public $flourCups;
	public $sugarCups;
	public $butterSticks;
	public $goodsMade;
	public $bakeTemp;

	public function __construct() {
		$this->bakeTemp = "350 degrees Fahrenheit";
	}
}

class Cookie extends Recipe {
	var $flourCups = 3;
	var $sugarCups = 3;
	var $butterSticks = 2;

	function bake() {
		$this->goodsMade = ($this->flourCups + $this->sugarCups + $this->butterSticks) * 3;
		return $this->goodsMade . " cookies made";
	}
}

class Brownie extends Recipe {
	var $flourCups = 1.5;
	var $sugarCups = 2.5;
	var $butterSticks = 2;
	var $chocolate = 3;

	function bake() {
		$this->goodsMade = ($this->flourCups + $this->sugarCups + $this->butterSticks + $this->chocolate) * 2;
		return $this->goodsMade . " brownies made";
	}
}

$sugarCookie = new Cookie();
$sugarCookie->bake();
//Returns "24 cookies made"

$brownies = new Brownie();
$brownies->bake();
//Returns "18 brownies made"

{% endhighlight %}

With our `Brownie` object, we can see that while the basic `Recipe` is still there, we have some slightly different variables, such as adding chocolate to the recipe. Our `bake()` function is also uses slightly different math to get the number of baked goods that come out of our brownie recipe, since a typical brownie recipe usually makes less items than a cookie recipe.

###Scope###
"But wait!" you exclaim. "Why do we get a different amount of cookies and brownies but they use the same function of `bake()`?" This is where something called scope comes into play. Scope is best described as the things (such as variables or functions) available to you at a given point. 

<img src="/img/posts/scope.png" alt="Scope box model"/>

Things with a global scope will be available to the overall `Class` and everything inside of it it (all `Objects` and `Functions`) will be able to use global variables and functions. Things within specific `Objects` are only available to the `Object` and the `Functions` within it. Variables used in a `Function` are only available to that `Function`. It's like an apartment: a landlord can have global keys and be able to get into the common area and your apartment, but your apartment key doesn't work on anyone else's apartment.  

##Conclusion##
Object Oriented Programming is an incredibly important thing to learn, but it's not always easy to understand all the different parts. People use all sorts of examples to try to explain it, but it didn't really click with me until someone sat down and explained it to me in plain English using an example that I was intimately familiar with. This is just one way that I've found helped me learn. Hopefully it was helpful for you! 
