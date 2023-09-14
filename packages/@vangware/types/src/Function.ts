import type { ReadOnlyArray } from "./ReadOnlyArray.js";

/**
 * Generic function type (safer than using `any`).
 *
 * @category Function
 * @remarks
 * This type is a generic function type, for callbacks and other places where
 * any type of function can be received.
 * @example
 * ```typescript
 * const example = (callback: Function) => callback("test");
 * ```
 * @see {@link ReadOnlyArray}
 *
 * @template Arguments Arguments of the function.
 * @template Output Output of the function.
 * @param functionArguments Arguments of the function.
 * @returns Output of the function.
 */
export type Function<
	Arguments extends ReadOnlyArray = ReadOnlyArray,
	Output = unknown,
> = (...input: Arguments) => Output;
