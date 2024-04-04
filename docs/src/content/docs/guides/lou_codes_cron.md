---
title: Cron Background
description: Intro about Cron, reasoning and usage.
next: true
prev: true
---

# Cron Background

`@lou.codes/cron` is a functional library to parse and generate cron expressions
in the UNIX an Quartz formats. Instead of throwing errors, this library returns
`undefined` when the input is invalid. It's also strictly typed to make it easy
to avoid errors when using it.

## Why

This one started as a work requirement. When looking for tools to parse CRON
expressions, the options out there where mainly class based, and not as strictly
typed as I would like. Because of this, I decided to create my own library.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

The whole goal was to keep every function in this as atomic as possible, doing
only one thing and doing it well. This makes it easier to test and to compose
with other functions.

The tests are done with my [test][test] library, keeping it pretty simple and
with high coverage.

## Where

I didn't used this library much on my own projects, but at work is still being
heavily used, and based on the downloads I got before changing the namespace of
my projects, looks like there were other folks making use of it as well.

<!-- Reference -->

[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[test]: ../lou_codes_test/
