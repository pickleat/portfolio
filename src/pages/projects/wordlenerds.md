---
title: "WordleNerds: a Wordle Leaderboard"
date: "2022-01-25"
tags: ['vue', 'supabase', 'project' ]
website: 'https://wordlenerds.com'
github: 'https://github.com/pickleat/wordleleaderboard'
---

# Note: I have since stopped working on this project. I have added some screenshots for posterity, but will not be updating it. 

> Problem: I like Wordle, but I want to remember my "stats" and compare myself to others.

> Solution: A leaderboard for the big Wordle fans!

## Background

I've been wanting to get back into building side-projects. In fact it was one of my <Link to="/">new years goals</Link>

## Step 1: Find a starter

> Problem: I want to find a stack I can go back to again and again as I start new projects.

Before I started at my current company I was toying around with React, Vue, Firebase, Supabase, AWS Lambda... the list goes on. This time I've decided to pick a stack and stick with it. Maybe I'll even open-source or sell my starter if I think it's valuable enough in the future. I'm confident I got this idea from [@VicVijayakumar](https://twitter.com/VicVijayakumar) on the [Virtual Coffee Podcast S1:E4](https://virtualcoffee.io/podcast/0104-vic-vijayakumar/). I landed on this [Vue + Supabase starter](https://github.com/zernonia/supabase-vue-3). It's been pretty amazing so far. 

### Step 2: Get started

I have an idea and I have the starter code. So I set up a project on [Supabase](https://supabase.io) and got to work. So far I have users, profile pages, the ability to paste in your puzzle solution, and it will show you the puzzles you've submitted. You can see a more detailed list on this [twitter thread](https://twitter.com/pickleat/status/1483884580390281225?s=20).


### Next Steps

I'll plan on writing short addendums as I release new features... like the actual leaderboard. For now, please sign up at [WordleNerds.com](https://wordlenerds.com) if you want to join in on the fun!

### Post-Mortem / Posterity

Sadly, I didn't make it as far on this project as I'd hoped. Life happened and I got distracted. Before I quit I was able to create auth (using magic links), edit profile pages, the ability to add each day's Wordle solution, and it would keep track of your individual streak. I've attached some screenshots for posterity but I don't plan on returning to the project in the future. 


![Screenshot of an empty textarea showing where a user would add their Wordle solution](https://raw.githubusercontent.com/pickleat/dev.to/master/Wordle-Leaderboard-Add-Puzzle.png)

![Screenshot of a user's current and best streak, and a list of their previous Wordle solutions](https://raw.githubusercontent.com/pickleat/dev.to/master/Wordle-Leaderboard-Streak.png)

