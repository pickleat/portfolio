---
title: "Elegantly Formatting Nested Child Elements"
date: "2020-05-10"
tags: ['frontend', 'html', 'react', 'javascript']
---

> Problem: Recieving HTML with nested children of an unknown depth that need to be formatted with CSS classes.

I've had this problem arise twice in the past several weeks. The first occassion I created a quick brute force solution, and the second time I was able to refactor the solution to solve the problem more elegantly and in a far better depth.

A little about the projects, they are both in [React](http://reactjs.org/), one is Create-React-App and the other is Gatsby, but both use [Tailwind CSS](tailwindcss.com).
The first occassion I was working with [QuillJS](https://quilljs.com/), an open-source WYSIWYG editor. It is a very powerful and pretty easy to get used to using. It provides "pure" HTML, so a "Heading 1" will be an `<h1>`, **bold** text is provided wrapped in `<strong>` tags, lists are provided in `<ol>` and `<ul>`, etc...

Here's an example of what could be provided from a user typing an input in the editor.

```html
<div>
  <h1>An Example Heading!</h1>
  <p><br></p>
  <p>Here's some paragraph text that shows you how
  <strong>awesome</strong>
  it is to write with QuillJS!</p>
  <p><br></p>
  <p>Here's a list: </p>
  <ul>
      <li>Item</li>
      <li>Another Item</li
      ><li>A Third Item</li>
  </ul>
  <p><br></p>
</div>

```

[Gist of the Code Above](https://gist.github.com/pickleat/0e264dffe787e104edb2cd0b2919233a.js)

Easy right? Maybe? If you have a perfect CSS system or if you don't need to apply any classes dynamically...

## The Brute Force Solution

The small problem arises with nesting of elements. You end up with elements nesting 3 or more layers deep. I specifically found a problem of a `<a>` nested 3 child elements deep inside a `<ul>` > `<li>`...
Not terrible, if you are __sure__ of how the elements will be nested. After some looking I started to see patterns and created this first version to solve my problem.

First I created an object of the classes I wanted to apply to each tag. Reminder: we're using [Tailwind CSS](tailwindcss.com) utility classes.

```js
const quillStyle = {
  h1: 'text-blue-500 font-bold text-xl',
  h2: 'text-blue-500 font-bold text-lg',
  h3: 'text-blue-500 font-bold text-md',
  a: 'text-teal-600 font-bold',
  p: 'text-blue-300',
  ol: 'list-decimal list-inside',
  ul: 'list-disc list-inside',
  li: 'pl-2 text-blue-300',
}

```

Then I created the function to recieve objects, and if it matches the `tagName` and then looking up and apply the corresponding styles.
All of this is wrapped in a `useEffect()` hook because we are gathering the QuillJS WYSIWYG Editor in a form.
It looked like this:

```js
useEffect(() => {
  // Cleans up the text provided by QuillJS wysiwyg
  function styleChildren(children) {
    children.forEach((child) => {
      if (child.tagName === 'H1') {
        child.classList = quillStyle.h1
      }
      if (child.tagName === 'H2') {
        child.classList = quillStyle.h2
      }
      if (child.tagName === 'H3') {
        child.classList = quillStyle.h3
      }
      if (child.tagName === 'P') {
        child.classList = quillStyle.p
      }
      if (child.tagName === 'A') {
        child.classList = quillStyle.a
      }
      if (child.tagName === 'OL') {
        child.classList = quillStyle.ol
        let listItems = [...child.children]
        listItems.forEach((listItem) => {
          listItem.classList = quillStyle.li
        })
      }
      if (child.tagName === 'UL') {
        child.classList = quillStyle.ul
        let listItems = [...child.children]
        listItems.forEach((listItem) => {
          listItem.classList = quillStyle.li
        })
      }
      if (child.tagName === 'LI') {
        child.classList = quillStyle.li
      }
    })
  }
  var jobDesc = document.getElementById('jobDesc')
  var jobChildren = [...jobDesc.children]
  styleChildren(jobChildren)
  // removed other code that doesn't apply to this post...
})
```

You can see its very much a brute force, but, it got the job done.
The struggle initially was that I wasn't sure exactly how deeply nested the html elements would be. However I solved the problem for the time being and moved on to other parts of the application.

## The More Elegant Solution

## How I found the solution

## Closing Remarks