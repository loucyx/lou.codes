---
title: Window Open Promise Background
description: Intro about Window Open Promise, reasoning and usage.
prev: true
sidebar:
    label: 🪟 Window Open Promise Background
---

# Window Open Promise Background

`window-open-promise` is a library to wrap the `window.open` function in a
promise, when successful means the window opened, when rejected means the window
was blocked somehow. This is one of the first libraries I made in the NPM
ecosystem.

## Why

I wanted to get into publishing libraries to NPM, and I thought of trying that
by publishing a small library that did one thing right, and this was it.

## How

I was working on a project that was using `window.open` and we had to do that
awkward `null` check to see if the window was opened or not, and I thought it
would be nice to have a promise for that. So I abstracted that check into the
library and made it into a promise. Later when `async/await` was added, it made
it really easy to use and reason about.

## Where

I used in private projects, but it was also used by other people in the open
source community. I realize that only when I started getting issues when I
migrated to ESM 😅.
