---
title: "CoffeeCodex.co"
date: "2020-05-01"
tags: ['auth0', 'aws', 'dynamodb', 'javascript', 'lambda', 'project', 'tailwind', ]
website: "https://coffeecodex.co"
github: "https://github.com/pickleat/coffeeCodex"
---

## Introduction and Problem

This [first commit](https://github.com/pickleat/coffeeCodex/commit/87e03c4cb648c13bbb2a96e87b7a9241420c5178) for this project was Jan 28, 2019. With big goals and no experience. This is the first "real" project I ever built. My goals were to create coffee _journal_ of sorts, so a person would never forget about a coffee they had. I wanted to learn so many things, but primarily I wanted this project to be built with Vanilla JavaScript and DynamoDB. Overall, its not perfect, and I'm the only active user, which is fine by me! Features include a Global "Codex" of all the coffees added. A user-specific "Codex" that is all the coffees an individual has had, and a rudimentary rating system 0-100. There is also a Coffee Timer that charts a particular brew of a coffee, but while it is functional I never got around to styling it or tying the brew information into the database.

## Why Coffee?

I spent about 3 years in the specialty coffee industry as a barista, roaster, and eventually co-owner of company. The day-to-day stresses of running a small business with terrible margins eventually got to me and I decided to leave coffee to learn software development. However my love for specialty coffee never waned. I still spend too much money every month ordering coffees from the best roasters around the country. Tasting unique varietals with flavor-notes like mango, dried peach, and red apple is one of my happiest hobbies. I could continue to wax poetic, but I lets just say... I'm a huge coffee nerd. And so this was the perfect project for me.

## Technologies Used

### Vanilla JavaScript

Like I mentioned the goal of this project was to use "Vanilla JavaScript" to create the app, so I could be sure I knew the fundamentals. I know that slowed down the development of the project, but I'm thankful that I can now traverse the DOM, find elements, and work with event listeners. Over time, I even began to create my own templates, to apply CSS styles with [Tailwind](https://tailwindcss.com/). Which was helpful because I had lots of HTML Tables to show data initally. Would I build this the same way now over a year later? No. I would make lots of other choices, like using a framework, like perhaps [NextJS](https://nextjs.org/). However I am glad to have spent the time learning the fundamentals.

### Auth0

One of the technology choices I am glad to have used was [Auth0](https://auth0.com/). This is an "Identity as a Service" Company that you are able to use for user authentication. Their documentation and quickstarts are phenomenal and I would use them for another project in a heartbeat. Another reason I'm happy I chose it, is that it got me my first freelance gig. Where I helped a SaaS app move from a PostgresSQL user database, to using Auth0, but that's a story for another day.

### AWS & Serverless Framework

Using AWS for this project also helped me get a deeper understanding of AWS services like DynamoDB and API Gateway, as well as the Serverless Framework for deploying Lambdas. It was a bit of a learning curve, but at the time when I was working at Vocool, it was the stack we were using and I wanted to learn it better. In all honesty the next time I do a project with a NoSQL database, I would choose it again, and on another project I learned you can't combine Netlify Lambdas with your own AWS account. Another story for another day. All in all, the latency has never been a problem, and still haven't paid for AWS, so I'm more than happy there.

## What I Learned Designing on the Fly with TailwindCSS

I am not a designer. I can't do some simple things here and there, but its definitely not a skill of mine. So I used Tailwind and didn't really mess with the default styles. It turned out alright, but think there was a lot of lost time testing how different layouts would look, and in the future I'll use Figma to get an outline going so that I don't was too much time reworking items again.

Tailwind though, has me completely converted. Its so easy to apply their utility classes to move things around and get them looking pretty good without much fuss. There isn't a ton of compiling to be done, and if you find you want to extend it or customize it you can do so without Tailwind getting in your way. I'll definitely keep using Tailwind and will continue to advocate for it, because in my eyes, it gives developers the ability to think more about __functionality__ without sacrificing __design__.

## Conclusion

I love this project, and it being my first big project will always put it close to my heart. The domain renewed last month so it'll live on for at least another year. If I find the time, I've got some [GitHub Issues](https://github.com/pickleat/coffeeCodex/issues) already lined up for improvements!
