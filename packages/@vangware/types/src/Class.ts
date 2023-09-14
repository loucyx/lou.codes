import type { ReadOnlyArray } from "./ReadOnlyArray.js";

/**
 * A generic type for classes.
 *
 * @category Function
 * @remarks
 * This type is a generic constructor function, mainly used when wrapping
 * classes.
 * @example
 * ```typescript
 * const example = (AClass: Class) => new AClass("test");
 * ```
 * @see {@link ReadOnlyArray}
 *
 * @template Arguments Arguments of the class constructor.
 * @template Instance Instance of the class.
 * @param classArguments Arguments of the class constructor.
 * @returns Instance of the class.
 */
export type Class<
	Arguments extends ReadOnlyArray = ReadOnlyArray,
	Instance = unknown,
> = new (...classArguments: Arguments) => Instance;
