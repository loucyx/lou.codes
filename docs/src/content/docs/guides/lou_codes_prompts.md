---
title: Prompts Background
description: Intro about Prompts, reasoning and usage.
---

# Prompts Background

`@lou.codes/prompts` is a minimalistic wrapper around Node.js' `readline`
module, tho it can be used anywhere (like in the browser) by matching
`readline`'s `createInterface` output.

## Why

I was previously using an external library for this in my CLI tools, but I just
needed a simpler implementation and I wanted to try the native solution provided
by Node.js. For now it only has a `question` util on it, but the idea is to add
other stuff as I need.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

I reworked original implementation so it can also work in the browser.
Originally it was only meant to be used in the CLI, but now it could even be
used with the browser `prompt` function, or anything like that.

## Where

Now is only used by [create-package][create-package], I haven't found much more
use for it yet, other than optimizing the size of my libraries and learning
about CLI prompts.

<!-- Reference -->

[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[create-package]: ../lou_codes_create_package/
