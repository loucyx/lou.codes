import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { Strigifiable } from "./Strigifiable.js";

/**
 * Joins all the items of the given strigifiable array using the given "glue".
 *
 * @category String
 * @remarks
 * Recursively generates a string type with the combination of the items of the
 * given array. Ideal to use as the output type of a `join` function.
 * @example
 * ```typescript
 * type FooOrBar = StringJoin<readonly ["foo", "bar"], "|">; // "foo|bar"
 * ```
 *
 * @template StrigifiableArray Array to join.
 * @template Glue String to use to glue items together.
 */
export type StringJoin<
	StrigifiableArray extends ReadOnlyArray<Strigifiable>,
	Glue extends string,
	Accumulator extends string = `${StrigifiableArray[0]}`,
	LoopTracker extends ReadOnlyArray<number> = [0],
> =
	LoopTracker["length"] extends StrigifiableArray["length"] ? Accumulator
	:	StringJoin<
			StrigifiableArray,
			Glue,
			`${Accumulator}${Glue}${StrigifiableArray[LoopTracker["length"]]}`,
			[...LoopTracker, LoopTracker["length"]]
		>;
