---
title: Math Background
description: Intro about Math, reasoning and usage.
next: true
prev: true
sidebar:
    label: 🧮 Math Background
---

# Math Background

`@lou.codes/math` is a curried functional library I created to do simple math
but getting the correct result (because [JavaScript doesn't][floating-point]).

## Why

I noticed that some WebApps that even handle money, are not using precise math
for the values, son let's say that you have to pay `13.1` and you have `8.2` of
taxes, the result will actually be `21.299999999999997` which is not great.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs], scaffolding it with my trusty
[create-package][create-package]. I made it ESM only because CJS no longer made
sense when I created this (Node started supporting ESM modules a long time ago),
and I made it tree-shakeable by using named exports.

It took around 5 hours to be done. I started from the idea of representing
numbers as a `[base, exponent]` tuple using `bigint` to ensure round long
numbers, and I went from there.

I tested everything using my [test][test] library.

## Where

I'm using it now every time I want to have reliable math in my apps, you can
play with it in your browser terminal by going to the [reference][reference]

<!-- Reference -->

[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[create-package]: ../lou_codes_create_package/
[test]: ../lou_codes_test/
[reference]: /libraries/lou_codes_math/
[floating-point]: https://0.30000000000000004.com/
