---
title: Utils Background
description: Intro about Utils, reasoning and usage.
next: true
prev: true
---

# Utils Background

`@lou.codes/utils` is a library of utilities for common tasks. It was one of the
first libraries I wrote, so it went through a lot of changes over the years
(including 4 renames) and it is still changing.

## Why

The first version of this library was written for a gig I had at that time, and
it was a collection of manually minified functions. I was trying to achieve the
minimum amount of code possible for some common tasks. You can see how old this
is by considering one of the utils was `xhr` and made use of `XMLHttpRequest`.

Over the years this evolved into a more modern library, making the code more
readable and leaving minification to the consumer with bundlers, moving some
utils away to their own packages, and adding new ones as I needed them.

## How

I built this library using [TypeScript][typescript] (originally vanilla
JavaScript), with configurations from my shared [configs][configs]. I made it
ESM only as soon as Node started supporting ESM modules, and I made it
tree-shakeable by using named exports.

## Where

Currently I use this library from other libraries such as
[iterables][iterables], [notify][notify] and the Paired Hook pattern ones, but
also at work in private projects.

<!-- Reference -->

[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[iterables]: ../lou_codes_iterables/
[notify]: ../lou_codes_notify/
