import type { ReadOnlyArray } from "../src/ReadOnlyArray.js";

const array: ReadOnlyArray<{ foo: "bar" }> = [{ foo: "bar" }];

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
array[0] = "vangware";

// @ts-expect-error Mutations shouldn't be allowed on foo either
// eslint-disable-next-line @typescript-eslint/no-unused-expressions, functional/immutable-data
array[0] ? (array[0].foo = "vangware") : undefined;

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
array.copyWithin(0, 1);

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
array.fill("vangware");

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
array.pop();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
array.push("vangware");

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
array.reverse();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
array.shift();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-array-sort-compare, functional/no-expression-statements, functional/immutable-data
array.sort();

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-array-sort-compare, functional/no-expression-statements, functional/immutable-data
array.splice(0, 1);

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/require-array-sort-compare, functional/no-expression-statements, functional/immutable-data
array.unshift("vangware");
