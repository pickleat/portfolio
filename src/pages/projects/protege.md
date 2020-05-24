---
title: "Protege.dev"
date: "2020-05-11"
tags: ['cypress', 'formik', 'project', 'react', 'tailwind', ]
website: 'https://protege.dev'
github: 'https://github.com/drewclem/protege'
---

> Problem: Its difficult to find a job as a junior developer, even more so if you prefer to work remotely.

> Solution: A job-board for Junior Remote Developers

## Background

It all started after I saw [this tweet](https://twitter.com/drewclemcr8/status/1242621758664052742?s=20) from my now friend [@drewclemcr8](https://twitter.com/drewclemcr8). He had just lost his job and mentioned an idea he'd be working on while he was looking for his next gig. The idea? "A job board tailored for junior remote positions." I had a similar idea bouncing around my head, but this was better, so I reached out to Drew and asked if I could help. The appeal for me, was to keep working on my skills and to work on something with a teammate. That way, I have someone to hold me accountable. I was glad to work with a tech stack I'm familiar with, like React and Tailwind and learn some new things, like [Formik](https://jaredpalmer.com/formik/), [QuillJS](https://quilljs.com/), and [Cypress](https://www.cypress.io/) along the way.

We got started quickly, taking his [Figma designs](https://www.figma.com/file/Yc6XznTgYwNNACqwjuk88H/Protege.dev?node-id=0%3A1) and turning them into our MVP in barely over a month. Each of us choosing different pages and features to build out. Two of the major projects that fell to me were build a form for a company to post a job, and working on our integration tests with Cypress.

## Post a Job Form

> Problem: Our form would be multi-part, include logo upload, have a "preview" screen of the information, as well as a confirmation page.

Before this project, I've created forms, but not in this specific way. Drew had already scoped for us to us a WYSIWYG editor called QuillJS, and Formik a form library for React. I realized quickly that although this was a single page I was building for 3 specific screens.

1. Form
2. Job-Posting Preview
3. Confirmation Page

### Getting Set Up

"The Form" would require all the necessary inputs, validation, and the image upload. The "Job-Posting Preview" would require all the form data to be passed to the job-posting template (more on that later). And finally the "Confirmation Page" would be a content page after we successfully submitted the data to the database. I knew that these 3 stages for the feature would render different child components and set up a `useState()` to update the current status. I went with a simple step 1, 2, or 3. so it can easily updated forward and back.

After creating all the inputs, I hooked up the form's inputs to the preview. This worked well enough after we worked out a one-to-one of the inputs to the components' values.

The Confirmation Page was pretty quick, so I turned my attention back to data-validation. We wanted to be sure the all the necessary inputs were filled out and in the correct form. There was a bit of a learning curve here, getting the validation and error messages set up messages with `Yup`.

### Logo Upload

Finally I was ready to work on the logo-upload. I hit a bit of a road-block here, learning pretty late in the process that media uploads are not accounted for in Formik. This was less than ideal, but after a bit of research I decided to create a component using some examples from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL). Thankfully native `fileReader()` and `readAsDataURL()` are availble in all browsers so I was able to get this working without too big of an issue. This was new to me, but pretty seamless. The main problem, was finding _what_ to look for more than the actual implementation.

## Cypress Testing

Testing is another larger feature on this project that was my responsibility. It took a bit for me to get ramped up, as all my previous experiences learning testing were not successful. For some reason I couldn't wrap my head around what assertions were and how a test means anything. Luckily this time, Drew showed me a few tests he had written on a previous project and after watching a few [Egghead videos](https://egghead.io/playlists/add-e2e-tests-with-cypress-to-a-react-application-7691?rc=84jyz) I was starting to grok it. Since lots of these tests were being written after we had a functioning app, it was pretty easy to know what I should test for. I started by visiting all the main pages, and then writing tests for each page individually. I opted to save writing the test for the form last, as it would require the most extensive test.

Once I had the momentum, things were pretty straightforward until I needed to test the logo upload. That wasn't too bad, it just required adding a [fixture](https://docs.cypress.io/api/commands/fixture.html#Syntax) that takes a file and allows you to use it in the test. In this case I had a logo for a fictional company and uploaded it to the form, then checking that it uploaded correctly.

## Closing

Overall, I'm really psyched about how this project turned out. And we're still working on it, moving on to other features and administration work. We're reaching out to companies, finding jobs, emailing our list, and tweeting interview and resume tips. This project is alive and breathing, so feel free to join our community!

[Protege.dev](https://protege.dev/)
