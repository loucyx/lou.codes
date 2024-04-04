---
title: Preact Pair Background
description: Intro about Preact Pair, reasoning and usage.
next: true
prev: true
---

# Preact Pair Background

`preact-pair` is a library to make the [Paired Hook pattern][paired-hook] easier
to implement. It's so simple anyone could implement it, but this as tests, types
and dev tools tagging on it and is maintained by the author of the pattern.

## Why

I created this library because I wanted to make it easier for people to use the
Paired Hook pattern I came up with.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

The main thing is a `pair` util that takes care of simplifying the pattern
implementation. The code is pretty much the same as [react-pair][react-pair],
main difference being the types and tests.

## Where

Currently I use this library every time I work in a Preact project.

<!-- Reference -->

[paired-hook]: https://lou.cx/articles/the-paired-hook-pattern/
[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[react-pair]: ../react_pair/
