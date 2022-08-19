---
title: "Eloquent JavaScript"
date: "2022-08-18"
tags: ['javascript']
---

# Eloquent JavaScript

## Background and First Impressions
Written by Marijn Haverbeke, Eloquent JavaScript is one of the more well-known and oft-recommended books about JavaScript. This is **not** a beginner friendly read. While it does cover basic concepts, It isn't approachable for someone who doesn't already know a programming language. That's why its *Eloquent* JavaScript and not *Beginner* JavaScript. With that said, this book is valuable and accessible, with the [complete material available on the website](https://eloquentjavascript.net/#links) which you can download and put on any device. The web version is pretty incredbile with codesandboxes to run each chapter's exercises right in the browser. I'm reading it as a part of a book club at work and its been beneficial to talk through some of the trickier bits with my other coworkers. 

I'm going to using this to add the notes and tid-bits I took away from each chapter. It's mostly stream-of-consciousness so proceed with that in mind.

## Introduction
> Because computers are dumb, pedantic beasts, programming is fundamentally tedious and frustrating. [-EJ](https://eloquentjavascript.net/00_intro.html#p_kGJAj5sEvM)
Ain't that the truth? 

> This is not only boring, it is ineffective. New problems often require new solutions. The field of programming is young and still developing rapidly, and it is varied enough to have room for wildly different approaches. There are many terrible mistakes to make in program design, and you should go ahead and make them so that you understand them. A sense of what a good program looks like is developed in practice, not learned from a list of rules. [-EJ](https://eloquentjavascript.net/00_intro.html#p_cPr6HjEw1O)

I loved this quote. You're going to make mistakes, so go ahead and make them but learn from them and apply that wisdom. 

## Chapter 1: Values, Types, and Operators
> The other operators shown all operated on two values, but typeof takes only one. Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator can be used both as a binary operator and as a unary operator. [-EJ](https://eloquentjavascript.net/01_values.html#p_fvxC7oK7dT)
This was the first time I realized why operators are called *un*ary, *bi*nary, and *ter*nary. 

> The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable. [-EJ](https://eloquentjavascript.net/01_values.html#p_43ZLcQuUDk)
I sort of disagreed wtih this point, mostly because I recently came accross a more apt definition. A better rule of thumb is "`undefined` hasn't been set to anything and `null` has been specifically set to nothing". But there are exceptions to this also. 

The [section on short-circuiting operators](https://eloquentjavascript.net/01_values.html#i_3jN0iK4yKW) was confusing to me. I did grasp that the "or" operator `||` will return the right side if the left is false and that the "and" operator `&&` will do the opposite, but I think I so rarely use these with a boolean that the examples hurt my brain a bit. I got there in the end, but required me to stop for a few minutes. In the end MDN is always your friend [Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) [Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

## Chapter 2 Program Structure
> You should imagine bindings as tentacles, rather than boxes. They do not contain values; they grasp them—two bindings can refer to the same value. [-EJ](https://eloquentjavascript.net/02_program_structure.html#p_tdX1rrdcPQ)
I found this an unpleastant metaphor but a good one. 🐙

## Chapter 3 Functions
> Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. [-EJ](https://eloquentjavascript.net/03_functions.html#p_OO22/MKYA8)

I found the section on closures to be a bit of a mind-bender. We had a good discussion on it and what ultimately helped solidify my understanding is thinking of closures like classes. They aren't exactly analogous, but they do operate similarly in that each call to the closure allows it to keep its state and similarly to when you instantiate a class. 

> The dilemma of speed versus elegance is an interesting one. You can see it as a kind of continuum between human-friendliness and machine-friendliness. Almost any program can be made faster by making it bigger and more convoluted. The programmer has to decide on an appropriate balance. [-EJ](https://eloquentjavascript.net/03_functions.html#p_OO22/MKYA8)
This quote started a philosophical discussion in my head in-light of my previous confusion with operators (I still forget what `??` does). Do we write code for humans to read, which is probably more verbose or with more comments or for speed. I think this is where conventions matter quite a bit. For example if someone has never used destructuring before and then moves to a place where that is the default it could cause confusion. Or even using methods that are new can cause some mental overhead. 

> A key aspect in understanding functions is understanding scopes. Each block creates a new scope. Parameters and bindings declared in a given scope are local and not visible from the outside. Bindings declared with var behave differently—they end up in the nearest function scope or the global scope. [-EJ](https://eloquentjavascript.net/03_functions.html#p_2uxoSaANas)

## Chapter 4 Data Structures Objects and Arrays
This chapter has a hilarious side-quest of the "weresquirrel" that the author seemed overly committed too. As well as a pretty complex computation for correlation. I feel like the concept would've connected better with a different example, but I'll probably remember the squirrel. 

When explaining bracket versus dot notation, I noticed for the first time that bracket notation allows you to use an expression. I've used this many times before but I hadn't thought of that being a specific reason to use one over the other. 

The rest parameter / spread operator section was a bit interesting, becuase while they use the same `...` they don't actually do the same thing. the rest parameter puts all the arguments passed to a function INTO an array. 
```js
function restParam (...args) {
  return args;
}
restParam(1, 2, 3, 4, 5) // returns [1, 2, 3, 4, 5]
```
Whereas the spread operator will iterate over an array and add each individual item
```js
let neva = ['never', 'gonna']
let rickRoll = [...neva, 'give you up', ...neva, 'let you down', ...neva, 'run around and desert you']
```