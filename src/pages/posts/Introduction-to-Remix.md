---
title: "Introduction to Remix"
date: "2022-04-21"
tags: ['remix']
---

# Introduction to Remix

Remix is a web-framework that serves as a server and browser runtime. It's based on the Web Fetch API instead of running on Node. It boasts that it can eliminate nearly every loading state and save you from "Spinnageddon".

## Getting Started

I got off to a rough start, when running the initial start scripts, because it asked if I wanted JavaScript or TypeScript and it did not actually work when I chose JS. Clearly TypeScript is the happy path for the tutorial, because it worked without a hitch once I trashed the JS version and re-downloaded everything choosing TypeScript. 

After getting everything installed and the local server running I saw a magnificent home screen. 

<img src="https://raw.githubusercontent.com/pickleat/dev.to/master/remix-homescreen.png" alt="Remix Homescreen" />

> Sidenote. I like that they use Tailwind CSS out of the box. It's really good for demo projects like this, but if you hate it you can easily remove it. 

The next thing they have you do is create your first (nested) route and put a default component there. 

## Loading Data

This is where Remix gets interesting. They mention how newer Webdev folks would now find it common to create an API route to get some data and then provide it to the frontend. Or folks with a background in MVC frameworks (like Rails) would see Remix routes as backend "views". Instead of either of these patterns, Remix allows you to load data right in the route itself and provide that data to the component to render. 

Remix has a concept of "loaders" which are your API layer, but because the Frontend and Backend aren't specifically broken out, you'll notice the `console.log()` shows up in the terminal and the browser console. To use loaders you'll import `useLoaderData`, get any data you want by exporting a `loader` function then use it by calling the `useLoaderData()` function. It looks like this in our default posts component.

```ts react
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    posts: [
      {
        slug: 'my-first-post',
        title: 'My First Post',
      },
      {
        slug: 'my-second-post',
        title: 'My Second Post',
      },
    ],
  });
};


export default function Posts() {
  const { posts } = useLoaderData();
  console.log(posts);
  return (
    ...
  );
}
```

However I did find it a bit weird that they immediately have you refactor this and put it in another function called `post.server.ts`. This new file does essentially the same thing as the loader function above, but abstracts it into a function called `getPosts` in the `app/models/post.server.ts` file (they have two already scaffolded in that directory). 

That leaves our `loader` function looking like this: 

```ts react
export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

...
```

Which is simpler for sure.

## Pulling from a Data Source

Remix (and specifically our starter) comes pre-configured with Prisma and SQLite. I've used Prisma in the past and its nifty, but the TL;DR: Prisma is an ORM for Node.js and Typescript that allows for type safety and more readable (their words) schemas.

They had me add a `Post` schema and seed the db with a post to start with. Now when we restart the dev server the seeded posts show up on my `/posts` page.

<img src="https://raw.githubusercontent.com/pickleat/dev.to/master/Screen%20Shot%202022-04-21%20at%203.52.14%20PM.png" alt="localhost:3000 with a list of posts that have been seeded from the db" />


## Dynamic Routes

We really don't want to create routes for each specific post in our db, so lets add one. Start out by creating a new route with a "$" so for ours it'll be `$slug.tsx`. I'll add a code snippet of the finished product below, but here's the gist of what is done:
1. Creating the dynamic route
2. Create a function in your `models/post.server.ts` file to fetch a single post. It looks like this: 

```ts
export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}
```

3. Update the loader function in the `$slug.tsx` file by passing the slug from the URL as a param to the new `getPost()` function.
4. Add a markdown parser we used `marked` and set the HTML inside your component. 

Final product of `$slug.tsx`

```ts
import { marked } from "marked";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Post } from "~/models/post.server";

import { getPost } from "~/models/post.server";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${post.slug}`)

  const html = marked(post.markdown);

  return json<LoaderData>({ post, html });
}

export default function PostSlug() {
  const { post, html } = useLoaderData() as LoaderData;
  return (
    <main className="max-w-4xl bg-blue-100 m-auto my-4 p-4">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
};
```

## Next Steps
I wish that I had a bit more time, because I would've liked to get through the next section which was adding an admin section so we can add posts to the database. However I ran out of time. 

## Final Thoughts
The idea and promise of Remix is compelling. I am an advocate for using Web APIs first instead of reinventing the wheel. I also share their hatred of loading spinners. It also has some React Router goodness baked right in (that `<Link>` component is pretty nice). However I was a bit hefty by the end of it, for the simple purpose of loading a blog post. However, I can see that being an tutorial that is too small for the technology to shine. If we had more complex data or multiple data sources I can see it being more useful. I like how easy they made it to get started and with a db no less. That's definitely better than other tutorials I've done in the past that made you set up the database yourself. If I were starting a new project tomorrow and knew a db was going to be necessary I'd consider Remix, or my normal stack of using Vue and Supabase. 