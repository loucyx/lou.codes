---
title: Test Background
description: Intro about Test, reasoning and usage.
next: true
prev: true
---

# Test Background

`@lou.codes/test` is a testing library based on the concept of
[RITEway][riteway] and inspired by [uvu][uvu].

## Why

I don't usually like to test, but I discovered is because tests frameworks out
there are really messy and harder to use than they need to be. Learning about
functional programming I ran into [RITEway][riteway] written by Eric Elliot and
I really liked the approach of keeping every test very atomic, easy to read and
strict, but I thought that having my own implementation would be hard so I just
kept using the testing tools I was already using back then. But then Luke
Edwards released [uvu][uvu] and he made me realize I could write a functional
testing library, so I did.

## How

The main idea behind this library is to follow a list of conventions for writing
tests with the following shape:

-   **Given:** Description of the util being tested.
-   **Must:** Description of the expected output.
-   **Received:** We run the function and get the result.
-   **Wanted:** The result we expect.

Then the util `test` will take that object and using [diff][diff] will either
return nothing if all is ok, or give us a diff result we can then use to let the
dev know about the issues found.

Because of the functional nature of this library, it can be used in the CLI or
in the browser, the output can be formatted in whatever way the dev seems fit or
use the default one.

To make it more useful it also is compatible with `tsx` to test TypeScript
directly, and with `c8` to get coverage for it.

## Where

I use this in all my open source libraries, and in some of my work libraries as
well. You can check the `/tests` directory in any of my libraries to see how I
use it.

<!-- Reference -->

[riteway]: https://github.com/ericelliott/riteway
[uvu]: https://github.com/lukeed/uvu
[diff]: ../lou_codes_diff/
