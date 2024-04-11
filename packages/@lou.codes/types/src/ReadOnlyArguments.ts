import type { ReadOnlyArray } from "./ReadOnlyArray.js";

/**
 * Read-only alternative to TypeScript's `Parameters`
 *
 * @category Function
 * @remarks
 * This type extracts the parameters of a function as a read-only tuple, similar
 * to `Parameters`, but with the added benefit of making the parameters
 * read-only.
 * @example
 * ```typescript
 * const example = (_foo: string, _bar: number) => undefined;
 * type ExampleArguments = ReadOnlyArguments<typeof example>; // readonly [string, number]
 * ```
 * @see {@link Function}
 * @see {@link ReadOnlyArray}
 *
 * @template Input Function to extract parameters from.
 */
export type ReadOnlyArguments<Input extends Function> =
	Input extends (..._arguments: infer Arguments) => infer _Output ?
		Readonly<Arguments>
	:	never;
