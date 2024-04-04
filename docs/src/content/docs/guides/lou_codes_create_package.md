---
title: Create Package Background
description: Intro about Create Package, reasoning and usage.
next: true
prev: true
---

# Create Package Background

`@lou.codes/create-package` is a scaffolding tool to create new packages with
some basics I always have in my projects (configurations, dependencies and so
on). It includes a small example util and test to get you started.

The name of the package is intentionally prepended with `create` so the `create`
command of package managers such as `pnpm` can be used like this:

```bash
pnpm create @lou.codes/package
```

## Why

Every time I got started with a new project I basically copied the previous one,
deleted all the code, changed all the names and started from there. This was
tedious and error prone (often forgetting something). This package was born out
of the need to automate this process. It initially included what's now in
[configs][configs].

## How

Initially I used some libraries such as [mem-fs-editor][mem-fs-editor] to create
the necessary files, and copy templates, but nowadays I use `node:fs/promises`
instead to reduce the amount of dependencies. I also use some of my own
dependencies, like [ansi][ansi] and [prompts][prompts].

## Where

I used this to create several of the latest libraries I've published, such as
[notify][notify] and [diff][diff]. I've also used it at work to create some
internal tools.

<!-- Reference -->

[configs]: ../lou_codes_configs/
[mem-fs-editor]: https://npm.im/mem-fs-editor
[notify]: ../lou_codes_notify/
[diff]: ../lou_codes_diff/
[ansi]: ../lou_codes_ansi/
[prompts]: ../lou_codes_prompts/
