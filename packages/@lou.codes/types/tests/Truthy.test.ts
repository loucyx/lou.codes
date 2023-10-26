import type { EmptyString } from "../src/EmptyString.js";
import type { Truthy } from "../src/Truthy.js";

type SomeNumbers = -0 | -0n | 0 | 0n | 13;
type LouOrNothing = EmptyString | "Lou";
type Maybe = "yes" | undefined;

export const booleanTrue: Truthy<boolean> = true;
export const number13: Truthy<SomeNumbers> = 13;
export const lou: Truthy<LouOrNothing> = "Lou";
export const maybeYes: Truthy<Maybe> = "yes";

// @ts-expect-error `false` is Falsy.
export const booleanFalse: Truthy<boolean> = false;

// @ts-expect-error `0` is Falsy.
export const numberNegative0: Truthy<SomeNumbers> = -0;

// @ts-expect-error `0n` is Falsy.
export const numberNegative0n: Truthy<SomeNumbers> = -0n;

// @ts-expect-error `0` is Falsy.
export const number0: Truthy<SomeNumbers> = 0;

// @ts-expect-error `0n` is Falsy.
export const number0n: Truthy<SomeNumbers> = 0n;

// @ts-expect-error `""` is Falsy.
export const nothing: Truthy<LouOrNothing> = "";

// @ts-expect-error `undefined` is Falsy.
export const maybeNope: Truthy<Maybe> = undefined;
