---
title: Notify Background
description: Intro about Notify, reasoning and usage.
next: true
prev: true
sidebar:
    label: 📣 Notify Background
---

# Notify Background

`@lou.codes/notify` is a tiny functional curried library to setup a simple
pub/sub system. It only has 3 functions: `emit`, `on` and `broadcast`. This last
is just bundling the other two and linking them to the same state.

## Why

This one started as a work requirement. Looking for a pub/sub library I found a
bunch, but they were either an "overkill", filled with unwanted features, or too
old, or to "class based". So I decided to make my own.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only because CJS no longer made sense
when I created this (Node started supporting ESM modules a long time ago), and I
made it tree-shakeable by using named exports.

It took around 2 hours to be done, thanks to it relying on a lot of my other
packages. I created with with [create-package][create-package], and I used ,
[iterables][iterables], [predicates][predicates], [utils][utils], [test][test]
and [types][types].

It took longer to think how I wanted the API to look like, than actually making
it a reality. I started with `on` and `emit`, `broadcast` came later when I
figure out how I wanted to make it as functional as possible.

## Where

I've used this at work in private projects only, so no public usages yet, but as
any other of my libraries, you can play with it in your browser terminal by
going to the [reference][reference].

<!-- Reference -->

[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[create-package]: ../lou_codes_create_package/
[iterables]: ../lou_codes_iterables/
[predicates]: ../lou_codes_predicates/
[utils]: ../lou_codes_utils/
[test]: ../lou_codes_test/
[types]: ../lou_codes_types/
[reference]: /libraries/lou_codes_notify/
