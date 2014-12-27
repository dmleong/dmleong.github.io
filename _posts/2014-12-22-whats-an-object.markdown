---
layout: post
title:  "What's an object? A beginner's guide to Object Oriented Programming"
date:   2014-12-22
author: Danielle Leong
comments: True
categories: blog
tags: beginner, "object oriented programming", oop
excerpt: "An attempt to explain Object Oriented Programming using cookies, pies, and brownies." 
excerpt-photo: /img/posts/cookies.jpg
---

##tl;dr##
>Object Oriented Programming (OOP) is an incredibly important concept that is difficult to explain to a person new to programming. This post will attempt to break down the concept of OOP into plain English using baking as an example. 

###<a href="/img/posts/magnets.jpg">Objects.</a> How do they work? ###
When I started programming, the term Object Oriented Programming (OOP) was being thrown around constantly, but the internet doesn't always take into consideration that *newbies don't know how to read technical documentation*. Technical documentation, even that which is aimed at new programmers, often forgets to take into consideration the basics that one is "supposed to know". One of these things, I found, was as simple as explaining what an object is. 

For the longest time, I thought <a href="http://php.net/manual/en/language.types.array.php">arrays</a> and objects were the same thing. An array is an ordered map. An easy way to think about this is like a grocery list. 

``` Array
    (
        [0] => sugar
        [1] => flour
        [2] => butter
    )
```

If you wanted to reference a specific item in that array, you could just print `$array[0]` and get "sugar". 
 
Objects are slightly more difficult to explain. Even when you search on Google, it tells you that there's no way you can sum it up easily: 

<img src="/img/posts/ooo.png" alt="Thanks, Google"/>

The <a href="http://docs.oracle.com/javase/tutorial/java/concepts/object.html">Oracle article</a> actually does a decent job at explaining it, but I'll give an example that finally made everything click for me. 

For this lesson, we will cover the following terms: 

* Class
* Constructor
* Object
* Instance 
* Inheritance
* Function (or Method in other languages like C++ or Java)

And because I like baking, I'll use the class `Recipe`.


{% highlight php linenos %}
<? php
class Recipe {
	protected $ingredients;
	protected $steps;

	public function Recipe() { 
		$this->ingredients = array();
		$this->steps = array();
	}

	public function addIngredient($ingredient) {
		$this->ingredients[] = $ingredient; 
	}

	public function addStep($step) {
		$this->steps[] = $step; 
	}

	public function printOutput() {
		echo "Ingredients:\n";

		for($i = 0; $i < count($this->ingredients); $i++) {
			echo $i . " " . $this->ingredients[$i] . "\n";
		}

		// Prints numbered steps
		echo "Steps:\n";

		for($i = 0; $i < count($this->steps); $i++) {
			echo $i . " " . $this->steps[$i] . "\n";
		}

		echo "\n";
	}
}

{% endhighlight %}


###Class###
In this example, `Recipe` is an example of a `Class`. A `Class` is your source of truth or set of basic instructions for the thing you're trying to make. It should be pretty vague and generic so that you can reuse it in other situations. At its most basic core concept, a recipe is a list of ingredients and a list of steps you follow with those ingredients. 

###Constructor###
Your `Constructor` (line 6) contains instructions on how you want to *build* (or instantiate) your `Class`. In this case, you build your recipe by having a list of ingredients and a list of steps. 


###Object###

Now we want to actually do something with our recipe. 
{% highlight php %}

//Create a new instance of Recipe called $sugarCookie
$sugarCookie = new Recipe();
$sugarCookie->addIngredient("sugar");
$sugarCookie->addIngredient("flour");
$sugarCookie->addIngredient("butter");
$sugarCookie->addStep("Mix together");
$sugarCookie->addStep("Cut out shapes");
$sugarCookie->addStep("Put in oven");
$sugarCookie->printOutput();

{% endhighlight %}

We want to make an actual item (`Object`) by cloning our original recipe (`Class`). Here, we create a new instance of `Recipe` and call it `$sugarCookie`. We add our ingredients, run our cookie magic, and get magic tasty goodies out of it.  

###Instance###
An `Instance` is an `Object` that is a copy of a `Class`. `$sugarCookie` is an instance of `Recipe`. We can make as many `Instances` of `Recipe` as we want! 

{% highlight php %}
//Create a new instance of Recipe called $pie
$pie = new Recipe();
$pie->addIngredient("pie crust");
$pie->addIngredient("filling");
$pie->addStep("Roll out crust");
$pie->addStep("Fill with filling");
$pie->addStep("Roll out top crust");
$pie->addStep("Put in oven");
$pie->printOutput();

{% endhighlight %}

Here we have `$pie` as another `Instance` of our original class of `Recipe`. We have completely different variables (pie crust and filling) but the same basic structure is the same as `$sugarCookie`. 

###Inheritance###
Remember how I said a `Class` should be as vague as possible? The reason is because of `Inheritance`. 

{% highlight php %}

class Brownie extends Recipe {
	public function Brownie() {
		parent::Recipe();
		$this->ingredients[] = "chocolate";
	}
}

$brownie = new Brownie();
$brownie->addIngredient("sugar");
$brownie->addIngredient("flour");
$brownie->addIngredient("eggs");
$brownie->addStep("Mix together");
$brownie->addStep("Bake");
$brownie->printOutput();

{% endhighlight %}

Here we are extending our `Recipe` to create a new class of `Brownie`. Since all brownies have a lot of chocolate, it makes sense that our `Brownie` class should add it by default. So while our `Brownie` class inherits all of the basic ingredients and steps from our `Recipe` class, it doesn't do enough to cover this specific class's needs, so we modify it as needed.


###Function### 
Looking through our `Recipe` we see things like `public function addIngredients()`. This is an example of a `Function`. I like to think of functions as verbs. They do things to the variables (in this case, ingredients). Our functions should always be small and reusable to avoid surprises. In this case, `addIngredients` makes a list of the ingredients we need and nothing else. 

###Let's look at it all together###

{% highlight php linenos %}
<?php
//Make a new recipe class that is easy to duplicate 
class Recipe {
	protected $ingredients;
	protected $steps;

	public function Recipe() { //the constructor that builds our class
		$this->ingredients = array();
		$this->steps = array();
	}

	public function addIngredient($ingredient) {
		$this->ingredients[] = $ingredient; //adds ingredients to an array
	}

	public function addStep($step) {
		$this->steps[] = $step; //adds steps to an array
	}

	public function printOutput() {
		// Prints ingredients
		echo "Ingredients:\n";

		for($i = 0; $i < count($this->ingredients); $i++) {
			echo $i . " " . $this->ingredients[$i] . "\n";
		}

		// Prints numbered steps
		echo "Steps:\n";

		for($i = 0; $i < count($this->steps); $i++) {
			echo $i . " " . $this->steps[$i] . "\n";
		}

		echo "\n";
	}
}

//Create a new instance of Recipe called $sugarCookie
$sugarCookie = new Recipe();
$sugarCookie->addIngredient("sugar");
$sugarCookie->addIngredient("flour");
$sugarCookie->addIngredient("butter");
$sugarCookie->addStep("Mix together");
$sugarCookie->addStep("Cut out shapes");
$sugarCookie->addStep("Put in oven");
$sugarCookie->printOutput();

//Create a new instance of Recipe called $pie
$pie = new Recipe();
$pie->addIngredient("pie crust");
$pie->addIngredient("filling");
$pie->addStep("Roll out crust");
$pie->addStep("Fill with filling");
$pie->addStep("Roll out top crust");
$pie->addStep("Put in oven");
$pie->printOutput();


//Extend Recipe to create a new class of Brownie. Brownie inherits from Recipe
class Brownie extends Recipe {
	public function Brownie() {
		parent::Recipe(); //inherits the parent class's constructor
		$this->ingredients[] = "chocolate";
	}
}

//Create a new instance of Brownie called $brownie
$brownie = new Brownie();
$brownie->addIngredient("sugar");
$brownie->addIngredient("flour");
$brownie->addIngredient("eggs");
$brownie->addStep("Mix together");
$brownie->addStep("Bake");
$brownie->printOutput();


{% endhighlight %}


###Scope###
"But wait!" you exclaim. "If we're using the same constructor in `Recipe` and `Brownie` (lines 7 and 42), how come we don't end up with chocolate in our `$pie`? This is where something called scope comes into play. Scope is best described as the things (such as variables or functions) available to you at a given point. Looking at the graph below, variables and functions are available for inheritance (think of your parents giving you their DNA) but you're unable to inherit "up" (you cannot affect your parents' DNA). 

<img src="/img/posts/scope.png" alt="Scope box model"/>

Everything in our `Class` (all `Variables` and `Functions`) are available for use in all `Objects` that inherit (or extend) that class. Things within specific `Objects` are only available to the `Object` and the `Functions` within it. Variables used in a `Function` are only available to that `Function`. It's like an apartment: a landlord can have the master keys and be able to get into the common area and your apartment, but your apartment key doesn't work on anyone else's apartment.  

##Conclusion##
Object Oriented Programming is an incredibly important thing to learn, but it's not always easy to understand all the different parts. People use all sorts of examples to try to explain it, but it didn't really click with me until someone sat down and explained it to me in plain English using an example that I was intimately familiar with. This is just one way that I've found helped me learn. Hopefully it was helpful for you! 

<a href="http://www.seriouseats.com/recipes/2013/12/the-food-lab-best-chocolate-chip-cookie-recipe.html">And here's my favorite cookie recipe</a>.
 
<a href="http://www.ambitiouskitchen.com/2012/08/peanut-butter-chocolate-chip-cookies-with-sea-salt/">Photo credit</a>
