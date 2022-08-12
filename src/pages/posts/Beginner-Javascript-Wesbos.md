---
title: "Beginner JavaScript (Wes Bos Course)"
date: "2022-08-12"
tags: ['javascript']
---

# Intro

In mid-July 2022 I did a leveling and performance review exercise with my manager at work (which resulted in a raise / promotion for me 🤑). One of the objectives I set was to improve my understanding of JavaScript, which I use everyday at work. Technically we use Vue for our frontend applications, but we believe the underlying language is more appropriate than the framework it sits on top of. The process of the exercise spanned several weeks and so I came accross [Beginner JavaScript by Wes Bos](https://wesbos.com/javascript/01-the-basics/welcome). And he put the entirety of the course in written form for FREE on his website. I decided a cadence of one lesson per-work day would work well for me and while "beginner" isn't my category I was confident I would learn something in almost every lesson, or at least a reminder. And to keep myself accountable I decided to make a Twitter thread of the takeaway from each lesson. You can find that thread here:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Did you know that <a href="https://twitter.com/wesbos?ref_src=twsrc%5Etfw">@wesbos</a> has a written version of his Beginner JavaScript course on his website? I&#39;m gonna try to do a lesson a day and tweet something I learned!</p>&mdash; Andy Pickle (@pickleat) <a href="https://twitter.com/pickleat/status/1542887490570403840?ref_src=twsrc%5Etfw">July 1, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Additionally, we started a book club reading Eloquent Javascript, but I'll write about that later.

## Day 1: Running and Loading JS
I Learned if you have a script tag that imports an external JS file you can't put any JS inside that tag and expect it to run. 
Example:
```js
<script src="./some.js">
  console.log("Hey ma!"); // Won't print
</script>
```
[Lesson Link](https://wesbos.com/javascript/01-the-basics/running-and-loading-js#external-javascript-files)

## Day 2: Variables and Statements
"Kebab case" variables are not valid JavaScript
Never realized this!
![Screenshot of error in the console that results from attempting to use kebab-cased variables.](https://pbs.twimg.com/media/FW1F40-WQAEIjqh?format=jpg&name=large)
[Lesson Link](https://wesbos.com/javascript/01-the-basics/variables-and-statements)

## Day 3: ESLint and Prettier
ESLint and Prettier. These are magic. 
ESLint: tells you why your code is not up to standard. This can be frustrating, but it helpful on projects to have a clear guidelines.
Prettier: fixes syntax issues to keep code looking right.
[Lesson Link](https://wesbos.com/javascript/01-the-basics/code-quality-tooling-with-prettier-and-eslint)

## Day 4: Intro to Types.
`Symbol` is a type in JS, that allows for unique identifiers for Objects. But I'm struggling to try to use it... I can add Symbols as keys, and get a list of keys, but I can't access the value with that Symbol. I need to learn more here.
[Lesson Link](https://wesbos.com/javascript/01-the-basics/types-introduction)

## Day 5: Numbers: 
TIL that 0.1 + 0.2 = 0.30000000004 in most programming languages 🤯.
Also that `NaN` is `typeof` number.
[Lesson Link](https://wesbos.com/javascript/01-the-basics/types-numbers)

## Day 6: Objects: 
I feel good about my understanding here, always good to refresh though. I remember it being hard to understand why you would group things at first, but a person as an "Object" is a good example.
[Lesson Link](https://wesbos.com/javascript/01-the-basics/types-objects)

## Day 7: Null and Undefined
TIL: You cannot have a const of `undefined` unless you explicitly set it as such. Because a `const` variable must be initialized with a value.
```js
const cantBeUndefined;
// Uncaught SyntaxError: Missing initializer in const declaration
const canBeUndefinted = undefined;
// Works!
```
[Lesson Link](https://wesbos.com/javascript/01-the-basics/types-null-and-undefined)

## Day 8: Booleans and Equality
"`===` always checks that the value AND type are exactly the same." -Wes Bos (emphasis added).
I remember getting tripped up by single, double, and triple = when I first started. Glad for the refresher here.
[Lesson Link](https://wesbos.com/javascript/01-the-basics/types-booleans-and-equality)

## Day 9a: Built-in Functions
There are many built-in functions in JS. Some handle tedious work for us and return values (parsing numbers), others perform actions (scrollTo scrolls a user to a certain place) and don't return anything.
[Lesson Link](https://wesbos.com/javascript/02-functions/functions-built-in)

## Day 9b: Custom Functions
Variables inside functions are temporary and after the function is run they are "garbage collected" (i.e. deleted from memory). If you want to use a value returned from a function, you need to save it in a new variable.
[Lesson Link](https://wesbos.com/javascript/02-functions/functions-custom)

## Day 10: Paramenters and Arguments
TIL: The difference between parameters and arguments. 
Parameters are in the function declaration, and arguments are passed when the function is called. But let's be real, they are used interchangeably.
[Lesson Link](https://wesbos.com/javascript/02-functions/functions-parameters-and-arguments)

## Day 11: Different Ways to Declare Functions
TIL Methods are functions that live inside of objects! 
Code Example:
```js
const person = {
    name: "Andy",
    sayHi() { console.log(`Hi ${this.name}!`)},
}
```
`sayHi()` is a method!
[Lesson Link](https://wesbos.com/javascript/02-functions/different-ways-to-declare-functions)

## Day 12: Debugging Tools
`Console.table()` is a Dream come true. HOW HAVE I NEVER KNOWN ABOUT THIS?!
`Console.count()` will also be super useful.
There are also way more ways to add breakpoints in the console than I knew about!
[Lesson Link](https://wesbos.com/javascript/02-functions/debugging-tools)

## Day 13: Scope
All I can say is that scoping is hard.
[Lesson Link](https://wesbos.com/javascript/03-the-tricky-bits/scope)

## Day 14: Hoisting
Most of this is pretty straightforward, but I found this quote helpful: "Only function declaration types of functions are hoisted, not function expressions (when you put a function in a variable)." Little gotcha there.
[Lesson Link](https://wesbos.com/javascript/03-the-tricky-bits/hoisting)

## Day 15: Closures
Closures are functions that return a function. Those functions can then be run independently from then on and keep their data. Closures are useful if you need to do something more than once (like perhaps keep the score of two games going).
[Lesson Link](https://wesbos.com/javascript/03-the-tricky-bits/closures)

## Day 16: Intro to the DOM
`Window`: Global, everything for your browser lives in here. 
`Navigator`: Browser specific, permissions, and your device.
`Document`: All your HTML lives in here. This is your entry point to interacting with JavaScript.
[Lesson Link](https://wesbos.com/javascript/04-the-dom/introduction-to-the-dom)

## Day 17: Selecting Elements
It is interesting that `querySelectorAll()` will select all the elements on the page no matter how deeply nested they are. So child elements with parents of the same type will be returned as separate items in the NodeList
[Lesson Link](https://wesbos.com/javascript/04-the-dom/selecting-elements)

## Day 18: Element Properties and Methods
"...the difference between elements and nodes. Nodes can be anything, but an actual element is something that is wrapped in a tag."
I learned about the `insertAdjacentText()` method!
[Lesson Link](https://wesbos.com/javascript/04-the-dom/element-properties-and-methods)

## Day 19: Working with Classes
Didn't learn anything specifically "new", but nice reminder of how to toggle classes on and off, and add event listeners to run functions.
[Lesson Link](https://wesbos.com/javascript/04-the-dom/working-with-classes)

## Day 20: Built-in and Custom Data Attributes
TIL working with custom data-attributes on an element you use `element.dataset` to get access to its attributes. 
Example
```html
<div class="name" data-name="Andy">Div</div>
```
I would use `document.querySelector(".name").dataset.name` to get access to "Andy" in `data-name` attribute.
[Lesson Link](https://wesbos.com/javascript/04-the-dom/built-in-and-custom-data-attributes)

## Day 21: Creating HTML. 
Good reminders of the basics like `document.createElement()`, and `element.appendChild()`, but also some new ones I don't recall using like `element.cloneNode()` and `document.insertAdjacentElement()`
[Lesson Link](https://wesbos.com/javascript/04-the-dom/creating-html)

## Day 22: HTML from Strings and XSS
I've never used `document.createRange()` and/or `createContextualFragment()`. I'd imagine many frameworks use these under the hood (or similar) to limit DOM re-rendering. Very cool!
[Lesson Link](https://wesbos.com/javascript/04-the-dom/html-from-strings-and-xss)

## Day 23: Traversing and Removing Nodes
The difference between `element.children` vs `element.childNodes`. 
```html
<div class="andy">Hi, my name is <em>Andy Pickle</em>. I like coffee, music and watches</div>
```
```js
const andy = document.querySelector('.andy');
console.log(andy.children);
console.log(andy.childNodes);
```
`andy.children` will show an HTMLCollection with only the `<em>` in it. Whereas `andy.childNodes` will show a NodeList with text, `<em>`, and more text. 
Essentially `.childNodes` gives you everything inside what you've selected and `.children` only gives you HTML elements inside your selection.
[Lesson Link](https://wesbos.com/javascript/04-the-dom/traversing-and-removing-nodes)