---
title: Iterables Background
description: Intro about Iterables, reasoning and usage.
---

# Iterables Background

`@lou.codes/iterables` is a collection of curried utils to work with iterables
in a functional fashion without having to use `for`, `while` and so on directly.

## Why

I always liked the curried approach of stuff like `map` in which you generate a
mapping function first:

```typescript
// mapDouble.js
const mapDouble = map(value => value * 2);
```

And then you can use it to map any array:

```typescript
// index.js
import { mapDouble } from "./mapDouble.js";

mapDouble([1, 2, 3]); // [2, 4, 6]
// Instead of [1, 2, 3].map(value => value * 2); every time.
```

When I discovered how powerful that style was, I wanted to use it all over. Now
the "limitation" of those types of functions is that they first run the mapping
function on every item, before going to the next. Iterators on the other side
run all functions on each item, which in some scenarios can be more efficient.

<!-- prettier-ignore-start -->
```typescript
// Regular mapping:
[1, 2, 3]
	.map(plusOne)
	.map(double)
	.forEach(console.log);
/*
Runs like this:
	-   [2, 3, 4].
	-   [4, 6, 8].
	-   Logs 4, 6, 8.
*/

// Iterators:
[1, 2, 3]
	|> map(plusOne)(%)
	|> map(double)(%)
	|> forEach(console.log)(%)
/*
Runs like this:
	-   2 -> 4 -> Logs 4.
	-   3 -> 6 -> Logs 6.
	-   4 -> 8 -> Logs 8.
*/
```
<!-- prettier-ignore-end -->

This from my point of view is great, so I wanted to have a library that would
allow me to use this style of programming with iterators, and that's how this
library was born.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

Over the development of this library I found some challenges like making the
result of iterators iterable again, so we can map multiple times from the same
iterator.

I went back and forward with the idea of making utils handle async
automatically, but the cost in size and performance made me decide to split the
utils into `@lou.codes/iterables` and `@lou.codes/iterables/asynchronous`.

## Where

This library proved to be really useful for me, so I used it for others like
[cron][cron], [notify][notify] and [window-open-promise][window-open-promise].

I've also used it in some private projects, with great results.

<!-- Reference -->

[typescript]: https://npm.im/typescript
[configs]: ../lou_codes_configs/
[cron]: ../lou_codes_cron/
[notify]: ../lou_codes_notify/
[window-open-promise]: ../lou_codes_window_open_promise/
