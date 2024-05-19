import type { StringJoin } from "../src/StringJoin.js";

type FooOrBar = StringJoin<readonly ["foo", "bar"], "|">;

export const fooOrBar: FooOrBar = "foo|bar";

// @ts-expect-error They have to be in the same order
export const barOrFoo: FooOrBar = "bar|foo";
