import type { Function } from "../src/Function.js";
import type { ReadOnlyArray } from "../src/ReadOnlyArray.js";

export const simpleGenericFunction: Function<
	[input: number],
	boolean
> = input => input % 2 === 0;
export const complexGenericFunction: Function<
	readonly [input: number | string],
	boolean
> = (input): input is string => typeof input === "string";

export const callbackFunction = <Arguments extends ReadOnlyArray, Output>(
	callback: Function<Arguments, Output>,
) => callback;

// eslint-disable-next-line functional/no-expression-statements
callbackFunction((input: number) => input % 2 === 0);

export const wrongGenericFunction: Function<
	readonly [input: string],
	number
	// @ts-expect-error Output should be same be number
> = input => input;
