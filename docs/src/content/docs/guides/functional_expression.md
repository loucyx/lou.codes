---
title: Functional Expression Background
description: Intro about Functional Expression, reasoning and usage.
next: true
prev: true
sidebar:
    label: 🧙 Functional Expression Background
---

# Functional Expression Background

`functional-expression` is a library to build regular expressions in a
functional way, making readability and maintenance of regular expressions
easier.

## Why

This library was born out of necessity while I was working in an upgrade for
`@lou.codes/cron`, in which I needed a powerful regular expression, but tracking
issues on it became really hard really fast, so I started working on this
library on the side just to build that expression, and I ended up making this
public as well.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

I went to the trusty [RegExr][regexr] to get documentation about all the
expression syntax I had available, and I used their descriptions to document my
utils.

## Where

Currently I use this in `@lou.codes/cron` but most probably I'll end up using it
every time I need to write some regular expressions from now on.

<!-- Reference -->

[regexr]: https://regexr.com/
[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
