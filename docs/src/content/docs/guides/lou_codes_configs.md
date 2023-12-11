---
title: Configs Background
description: Intro about Configs, reasoning and usage.
---

# Configs Background

`@lou.codes/configs` is a collection of configuration files that I use in all my
projects. It is a way to keep all my projects consistent and to make it easier
to start new projects, but also to update configurations across all of them at
the same time.

## Why

Over the years I found myself copying and pasting configuration files from one
project to another. This was a tedious process and I would often forget to set
something, or maybe I would forget to update a configuration file in one of my
projects. This would lead to inconsistencies across my projects and I would
often have to go back and fix them. This includes linting, formatting, typing,
and so on.

Initial this was part of [create-package][create-package], but it made more
sense to have be its own package.

## How

I started by creating a repository and copying over the latest configurations of
the project I was most confident in. Once I made all the configuration files
available for consumption, I went into every project and updated the
configuration files to point to the new repository, cleaning up other "dev
dependencies" in the process. This made prove to be a great move pretty quickly,
because the shared configurations made some errors that I was having in some
projects obvious.

## Where

Initially this package was a development dependency in all my projects, but now
that they all live in a monorepo, this is only used at the top level of said
mono-repo. That being said, I still use it as a separated dependency in some
private projects.

<!-- Reference -->

[create-package]: ../lou_codes_create_package/
