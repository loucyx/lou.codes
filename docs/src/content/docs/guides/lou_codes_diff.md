---
title: Diff Background
description: Intro about Diff, reasoning and usage.
---

# Diff Background

`@lou.codes/diff` is a library to compare two values an get an object
representing the differences between them. This object represents one of 3
possible changes: Create, Update, or Delete, and also has a path to know where
did the change happen inside the given values.

## Why

I was using [deep-diff][deep-diff] for a while in my [test][test] library, but
that was making my library way heavier than it needed to be, with features I
wasn't fully using and a syntax I didn't fully liked (the identifiers for the
type of changes are single letters instead of words).

Because of that, I decided to try to create my own diffing library, and this is
the result of that effort.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

The idea was to create a leaner alternative to [deep-diff][deep-diff], so
instead of taking a look at their code, I just took their output as a reference,
and implemented the diffing code myself.

To make it fast, I used generators instead of plain arrays. The final result
ended up being something I really like: A faster, simpler and smaller
alternative to [deep-diff][deep-diff], making my [test][test] also faster,
simpler and smaller in the process.

## Where

As I pointed out a few times in previous sections, I'm using this library in my
[test][test] library, and I'm pretty happy with it. So far I haven't used it
elsewhere, but it might prove useful in the future.

<!-- Reference -->

[deep-diff]: https://npm.im/deep-diff
[test]: ../lou_codes_test/
[typescript]: https://npm.im/typescript
[configs]: ../lou_codes_configs/
