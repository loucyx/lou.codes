---
title: Parsers Background
description: Intro about Parsers, reasoning and usage.
next: true
prev: true
---

# Parsers Background

`@lou.codes/parsers` is a library of functional utils to strings, JSON and so on
without throwing errors or relying in `NaN`, and instead just gives `undefined`
if the parsing fails. This way any parsing error can be check the same way, or
default valued with `??`.

The JSON parser also is secure by default, omitting `__proto__` properties.

## Why

Parsing values from user input, APIs and other untrusted sources can be really
tricky, because there are multiple ways to parse those and multiple values
coming from them. This library idea is to standardize to `undefined`, and avoid
`null`, `NaN` or `try/catch` blocks.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

The `attempt` util is key in this library, because it's an abstraction of
`try/catch` that tries to do whatever I want it to do, but if it throws an
error, it catches that and returns `undefined` instead.

The other "key" util is `parseInteger`, which is a curried function used by all
the number parsers such as `parseBinary` and `parseDecimal`.

## Where

This library is used by parsing depending libraries (obviously), such as
[cron][cron] and [predicates][predicates].

<!-- Reference -->

[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[cron]: ../lou_codes_cron/
[predicates]: ../lou_codes_predicates/
