---
title: ".map(), .filter(), and .reduce()"
date: "2019-07-06"
---

For about two weeks I've been applying for jobs. Sadly, the startup I was working at just didn't work out. I am super bummed it didn't work out, but that's how things go sometimes. Anyway, I've been posting on [twitter](https://twitter.com/pickleat) that I'm looking around and such and I had a friend offer to do a mock interview.

Short story, he absolutely roasted me.

I'm so thankful that we did that, because I've honestly never been asked technical questions in an interview like that. I just cracked under the pressure. I wasn't that I don't know how to reverse a list. I just couldn't remember how to do it on demand.

So I've been reviewing some foundational JavaScript concepts because it'd be good for me to memorize what they do and how to use them. Instead of having to have to look it up each time. Yesterday I posted this code snippet in a [tweet](https://twitter.com/pickleat/status/1147156504233033729?s=20) and it seemed to be pretty helpful to folks, so here's a bit more explanation.

![.map()](https://pbs.twimg.com/media/D-uEwR8X4AEN9n5?format=jpg&name=large)

## Array.map()

[from MDN:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
> The map() method creates a new array with the results of calling a provided function on every element in the calling array.

You have an array, and you need to do something to every element. That's what map is for!

```js
let numbers = [1,2,3,4,5]
numbers = numbers.map(numb=> numb+1)
console.log(numbers)
// will be [2,3,4,5,6]
```

The big hurdle for me initially with any of this was realizing that `numb` was totally made up. You can call it anything you want. Common practice is to call the `array` the plural of whatever is contained in your array, and the singular item for each computation. I'll be honest, lots of this clicked for me by using a `forEach()` for a long time, instead. The difference between them is `.map()` returns an updated array. So in the example above, the numbers array has been rewritten with each value plus one. But if you wanted to keep your original numbers array, you would simply declare it to a new array like so `let numbersPlusOne = numbers.map(numb=> numb+1)`.

## Array.filter()

[from MDN:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
> The filter() method creates a new array with all elements that pass the test implemented by the provided function.

The main difference here, is that whatever condition you pass, will give you a mutated array of all the items that meet that condition.
For Example:

```js
let numbers = [1,2,3,4,5]
numbers = numbers.filter(numb=> numb % 2 == 0)
console.log(numbers)
// will be [2,4]
```

Whatever condition you pass will be checked for each item in the array and it will be added to the new array and returned.

## Array.reduce()

[from MDN:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

This one is just a bit more complicated, because there are more arguments. But in its simplest form you can take an array and perform the same function on each element to receive back a single value. Back to our numbers array

```js
let numbers = [1,2,3,4,5]
numbers.reduce( (accumulator, currentValue) => accumulator + currentValue )
console.log(numbers)
// 15
```

Keep in mind the computation you do will be done on each item in the array, and the `accumulator` is the running total. There are also optional arguments of `currentIndex` and `array` that follow the `currentValue` (before the arrow function) but I won't get into those here.

Hope this helps!
