import type { MaybeEmpty } from "../src/MaybeEmpty.js";

type Greet = MaybeEmpty<"Hello">;
type Triple = MaybeEmpty<readonly [1, 2, 3]>;
type Foo = MaybeEmpty<{ readonly foo: "bar" }>;

export const greet: Greet = "Hello";
export const emptyGreet: Greet = "";

// @ts-expect-error Wrong value
export const wrongGreet: Greet = "Goodbye";

export const triple: Triple = [1, 2, 3];
export const emptyTriple: Triple = [];

// @ts-expect-error Wrong value
export const wrongTriple: Triple = [4, 5, 6];

export const foo: Foo = { foo: "bar" };
export const emptyFoo: Foo = {};

// @ts-expect-error Wrong value
export const wrongFoo: Foo = { foo: "baz" };
