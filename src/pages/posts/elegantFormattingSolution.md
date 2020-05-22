---
title: "Elegantly Formatting Nested Child Elements"
date: "2020-05-10"
tags: ['frontend', 'html', 'react', 'javascript']
---

> Problem: Recieving HTML with nested children of an unknown depth that need to be formatted with CSS classes.

I've had this problem arise twice recently. On the first occassion I created a quick brute force solution, and the second time I was able to refactor to solve the problem more elegantly and with greater power.

A little about the projects, they are both in [React](http://reactjs.org/), one is Create-React-App and the other is Gatsby, but both use [Tailwind CSS](tailwindcss.com).
The first occassion I was working with [QuillJS](https://quilljs.com/), an open-source WYSIWYG editor. It is very powerful and pretty easy to get used to using. It provides "pure" HTML, so a "Heading 1" will be an `<h1>`, **bold** text is provided wrapped in `<strong>` tags, lists are provided in `<ol>` and `<ul>`, etc...

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
      <li>First Item</li>
      <li>Another Item</li>
      <li>A Third Item</li>
  </ul>
  <p><br></p>
</div>

```

[Gist of the Code Above](https://gist.github.com/pickleat/0e264dffe787e104edb2cd0b2919233a.js)

Easy right? Maybe? If you only style elements or if you don't need to apply any classes dynamically...

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

Then I created the function to recieve HTML child by child, checking the `tagName` and then looking up and applying the corresponding styles.
All of this is wrapped in a `useEffect()` hook because we are gathering the QuillJS WYSIWYG Editor in a `<form>` and sent to the component after it has already been rendered.
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

[Gist of the Above Code](https://gist.github.com/pickleat/0474d89b4df1f0632992f541c44129b5)

You can see its very much a brute force, but, it got the job done.
The struggle initially was that I wasn't sure exactly how deeply nested the html elements would be. However I solved the problem for the time being and moved on to other parts of the application.

## The More Elegant Solution

A week or so later I encountered the same problem, this time while was updating my portfolio site. The HTML is provided via the GraphQL query and the [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) plugin. If you follow the standard Gatsby Tutorial you'll come up to this problem. If you want to format any of the HTML you are provided.

The new function is an improvement on the original in two ways: with **recursion** and by **abstraction**. Lets look at the code and then talk about the solution.

```js
useEffect( () => {
        // formats the Markdown
        function styleChildren(children) {
            children.forEach((child) => {
                let tagIt = child.tagName
                child.classList = blogStyle[tagIt]
                if(tagIt === 'CODE' && child.innerText.length > 15){child.classList = longCode[tagIt]}
                if(tagIt === 'CODE' && child.innerText.length <= 15){child.classList = shortCode[tagIt]}
                if(child.children) {
                    let grandChildren = [...child.children]
                    styleChildren(grandChildren)
                }
            })
          }

        let post = document.getElementById('post-data')
        let postChildren = [...post.children]
        styleChildren(postChildren)
    })
```

[Gist of the Above Code](https://gist.github.com/pickleat/e66075084ac0f5716ac7d2a91a550287)

### Explanation

This function recieves HTML, and then loops over each child element, applying the appropriate classes that match the element. There are still two `if` statements for `CODE` elements, because on mobile screens I had an overflow of text, and needed to enable horizonal scrolling. Aside from that we've removed all the other `if` statments and replaced them with a single `if` that checks if the child element itself has children.

### Abstraction

The first improvement is the abstraction of the tags themselves. Previously where there were a series of `if` statements to check if a `tag` matched a type (e.g. `H1`) and if so, it looked up the classList that should apply to that tag. Here we've abstracted those away, by pulling out the elements tagName into the variable `tagIt` from there it would just apply the classes by looking up the corresponding tag in the object of classes I called `quillStyle`. Now, we not longer care what the tag is specifically, this code is far more D.R.Y. than before.

### Recursion

Now, this is the good part. Previously, in our long list of `if` statements some included an additional nested `if` statement for the tags that were possible child elements. That's where the original solution is really poor. Only in the circumstances that you know _every_ element that could be nested would you be able to cover all the possibilities. Instead of trying to explicitly account for those elements, we've made use of a recursive function (a function that calls itself) if the element itself has children. Whereas before we needed to know every element that could possibly be nested, now we can check the full list of possible elements we declare in our style object to any nested depth, by spreading the child elements into their own variable and calling the function. This solution allows us to not worry about what elements _could_ be given as children, grandchildren, etc, and itstead spend our time worring about the styling of elements by type. Which is far more manageable.

## How I found the solution

When the problem arose for the second time, I had the confidence of already having solved the problem, knowing I could just copy and paste the code I had written before. But with a couple weeks of space between them, I was now able to see the patterns I missed which led to the two improvements.

## Closing Remarks

First, I hope this helps someone else, I'd love to hear from you if it does! I can others needing to use a solution like this going through the [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/) for Markdown Posts. Second, if you have any feedback [reach out](/contact/); I'd love to hear from you.
