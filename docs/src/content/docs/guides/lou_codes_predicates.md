---
title: Predicates Background
description: Intro about Predicates, reasoning and usage.
next: true
prev: true
sidebar:
    label: 🧐 Predicates Background
---

# Predicates Background

`@lou.codes/predicates` is a library of conditional checks (predicates) with
strong typing using type predicates.

## Why

There are lots of checks I did in every project (falsy checks, type checks,
matches, includes, etc.) so I wanted to have all of them in a single place and
this library was born out of that necessity.

## How

This library relies on a type narrowing feature of TypeScript called [type
predicates][type-predicates]. This feature allows to make functions with a shape
like this:

```typescript
const isString = (value: unknown): value is string => typeof value === "string";
```

Affecting the type narrowing in typescript like this:

```typescript
if (isString(value)) {
	// value is considered string here
}
```

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

Currying is used extensively. For example the util `isType` is used by
`isFunction`, `isString`, and `isNumber` to name a few. `isType` internally uses
`typeof` and a dictionary of types, but is a little bit different to using
`typeof` directly because `null` returns `"null"` instead of `"object"`.

## Where

As I mentioned in previous sections, I used to have this checks all over, so
when I moved that code here, it turned into a pretty common dependency in my
libraries and at work. It is used by [cron][cron], [iterables][iterables],
[notify][notify], [utils][utils], and more.

<!-- Reference -->

[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[type-predicates]:
	https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
[cron]: ../lou_codes_cron/
[iterables]: ../lou_codes_iterables/
[notify]: ../lou_codes_notify/
[utils]: ../lou_codes_utils/
