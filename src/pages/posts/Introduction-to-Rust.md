---
title: "Introduction to Rust"
date: "2022-02-17"
tags: ['rust']
---

# Introduction to Rust

Rust is a programming language that is "fundamentally about _empowerment_"* Meaning Rust is designed to empower you to be able to write code that can serve more "domains" than you did before. It can be used for low-level programs, to Native applications as well as Web Applications. I currently use [Warp](https://www.warp.dev/), which a terminal is written in Rust. And many other projects like run-times, Command-Line Interfaces (CLIs), compilers and bundlers are being written in Rust as well. 

A few quick facts about Rust: 
* It is a low-level language which allows it to be extremely fast.
* Rust has been voted the "most loved" programming language on the [Stack Overflow Developer Survey](https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) for six years running. So it seems like those that like it, _really_ like it. 
* Rust compiles before it can be run, this extra step allows the Compiler to catch lots of bugs for you before it reaches the user. JavaScript has some ways to handle this, but requires lots of additional tooling to do so. Nothing out of the box. 

I'm choosing to go through the [Rustlings](https://github.com/rust-lang/rustlings) to get started and I'll probably make some comparisons to JS/NodeJS as that's my most comfortable language.

To get started you'll have to download Rust, and some other things like Cargo (the build system and package manager for Rust), but there are instructions on the [Rust website](https://doc.rust-lang.org/book/ch01-01-installation.html) to get you started!

# Hello World! 

Let's write our first program! Create a file called `HelloWorld.rs`

```rs
fn main() {
  println!("Hello World!");
}
```

Then, compile our program by running the following command: `rustc HelloWorld.rs`

Now the command to run it! `./HelloWorld.rs`

And You should see `Hello World!` in your terminal. 

Now this program is small and doesn't require any dependencies or multi-part build steps. So it is complete, however if you needed to add anything we'd need to start using Cargo.

# Variables

## Immutable by Default
All programming languages have variables, but in Rust they are immutable by default. You can make it mutable by adding `mut` before the variable name.

🤔 At this point I'm wondering if that means I'll see `mut` often or if developers just create new variables with the change they need. 

So lets create two variables, one that is immutable and the other mutable. 
```rs
  let a = "Andy"
  let mut b = "Billy"
```

If I attempt to set `a` to anything else, I'll get an error.
```rs
  ^^^^^^^^^^^ cannot assign twice to immutable variable
```

But I can change `b` to another string without issue. But don't try to change its data type to an integer or you get a different error. 

## Shadowing
Sometimes you may need to turn a string into an integer that expresses it's value another way. Like "3" to 3. Or maybe you need to run some sort of computation or method on the variable. In Rust, you can do that with a practice called "shadowing." To do so you need to declare the variable with `let` again. Here's an example: 

```rs
let three = "three";
// but I need it as a number! 
let three = 3;
// you can also reference the old one
let three = three + 1;
// should be 4.
```

## Constants
Constants are variables _always_ immutable. They also require you to tell the **type** of the constant. Like so: 
```rs
const THREE: u8 = 3;
```
This is constant with the name `THREE` that is of type u8 (I won't get into types yet) with a value of `3`. This feels a bit verbose next to the equivalent Javascript. 
```js
const THREE = 3;
```
But there is more known about the variable, it is a very specific type of integer. I think this is to protect from memory issues, but couldn't quickly find a way to confirm.

# Functions
Next we'll turn our attention to functions. 
Functions are declared using `fn` instead of `function` which is the JavaScript equivalent. They also use `snake_case` for the function names for convention. The order of declaring the functions doesn't matter, so you can have one function call another that is declared lower in the file. Using our same "Hello World" example from before: 

```rs
fn main() {
  println!("Hello World!");

  another_function();
}
fn another_function(){
  println!("Another function");
}
```

## Parameters
Functions can also take parameters, which allow them to be more complex and work with data that is passed to them. However the parameters need to be typed as well. So the function knows what it will receive. 

```rs
fn hello_name(name: &str) {
  println!("Hello {}!", name);
}

fn main() {
  hello_name("Andy");
}
// Prints "Hello Andy!"
```

## Statements & Expressions
This is where functions seem to diverge from JavaScript in my understanding. 

> Function bodies are made up of a series of statements optionally ending in an expression.^

It is explained that **Statements** are code that perform some actions but do **not** return a value. Whereas **Expressions** return a value. 
Another gotcha is that Expressions do not end with semicolons.

So far all our examples have been functions with only statements, because we haven't returned anything. Let's write a function that returns a value. Notice functions that return values are written differently. they have an `-> type` and they don't end in a semicolon.
```rs
fn main() {
  let x = return_twelve();
  println!("{}", x);
}
fn return_twelve() -> i32 {
  12
}
```
The function `return_twelve` will return `12` to `main` and adds that to the variable `x` and then prints it!

That's all I have time for today, but next I should be going through Control Flow! You can find all the code from my examples in my [Learning Days Repository](https://github.com/pickleat/learningdays)

----

*From the Rust Programming Language Foreword: https://doc.rust-lang.org/book/foreword.html <br />
^ https://doc.rust-lang.org/book/ch03-03-how-functions-work.html#statements-and-expressions