---
title: Constants Background
description: Intro about Constants, reasoning and usage.
next: true
prev: true
---

# Constants Background

`@lou.codes/constants` is just a few common constants used across my projects.

## Why

I had a bunch of `Object.create(null)` and `Object.freeze(Object.create(null))`
for immutable empty objects only used for spreading. Also used `{}` sometimes,
but the issue with it is that syntactically it becomes hard to read after a
while, and having that on a constant make sense. Same for stuff like `[]` and
`""`, where you can't tell if that's accessing a property, or creating a new
thing.

Long story short, is like the rule against "magic numbers", but for empty
objects, arrays and strings.

## How

I started using [create-package][create-package], and from there I just exported
the constants I needed, removed tests because is just values, and then I just
went to all the places where this values were duplicated and replaced them with
the new constants.

## Where

It's being used by pretty much all my libraries now.

<!-- Reference -->

[create-package]: ../lou_codes_create_package/
