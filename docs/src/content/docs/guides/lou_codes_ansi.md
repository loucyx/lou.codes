---
title: ANSI Background
description: Intro about ANSI, reasoning and usage.
---

# ANSI Background

`@lou.codes/ansi` is a library of functional utils to play with [ANSI escape
codes][ansi-escape-code]. It makes use of [currying][currying] and
[composition][composition] to create a simple and easy to use API.

For example there's a `foregroundColor` util that does "nothing" by itself, but
it's used to create other utils like `foregroundRed`. `foregroundColor` itself
is the result of an `optionalFormat` util that will format only under the right
conditions.

One particular thing this library has that I think is pretty neat, is that it
can be used as a tag functions for [template literals][template-literals], like
this:

```typescript
import { foregroundRed } from "@lou.codes/ansi";

console.log(foregroundRed`Hello world!`);
```

## Why

I made this library when I started coding my own CLI tools for Node.js, and I
wanted to have my own library with only some basic utils that I needed for
color, position, and so on. Alternatives such as [chalk][chalk] and
[kleur][kleur] didn't fit my needs, and as usual I wanted to use the opportunity
to build something myself, to learn from it.

## How

I built this library using [TypeScript][typescript], with configurations from my
shared [configs][configs]. I made it ESM only as soon as Node started supporting
ESM modules, and I made it tree-shakeable by using named exports.

I relied heavily on the the [ANSI escape codes wiki][ansi-escape-code] to learn
about the different things I could do with ANSI escape codes, and I used the
[chalk][chalk] and [kleur][kleur] source code to learn about stuff like
detecting if the CLI has color support.

One particular challenge was to have test aligned with the other libraries,
because [`@lou.codes/test`][test] is based on `@lou.codes/ansi` itself, so using
it would mean having circular dependencies. The solution was to rely on
`node:test` with a wrapper that makes test similar to the ones in the other
libraries.

## Where

I'm using this library in my own CLI tools, such as
[create-package][create-package] and [test][test]. I've used it in the past as
well for some personal packages like a colorful CLI personal card.

<!-- Reference -->

[ansi-escape-code]: https://en.wikipedia.org/wiki/ANSI_escape_code
[currying]: https://en.wikipedia.org/wiki/Currying
[composition]:
	https://en.wikipedia.org/wiki/Function_composition_(computer_science)
[chalk]: https://npm.im/chalk
[kleur]: https://npm.im/kleur
[configs]: ../lou_codes_configs/
[typescript]: https://npm.im/typescript
[create-package]: ../lou_codes_create_package/
[test]: ../lou_codes_test/
[template-literals]: https:/mdn.io/Template_literals
