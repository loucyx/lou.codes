import type { ArrayLike } from "./ArrayLike.js";
import type { Defined } from "./Defined.js";
import type { NeverFallback } from "./NeverFallback.js";
import type { ReadOnlyCollection } from "./ReadOnlyCollection.js";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 * @remarks
 * Type to represent the type of the key in an {@link ReadOnlyCollection}. It
 * automatically omits `symbol` keys from objects, and uses `number` for arrays
 * with dynamic `length`.
 *
 * @example
 * ```typescript
 * const array = [1, 2, 3] as const;
 * const object = { "🟢": "🟩" } as const;
 *
 * const arrayKey: KeyOf<typeof array> = 0;
 * const objectKey: KeyOf<typeof object> = "🟢";
 * ```
 * @see {@link ReadOnlyCollection}
 *
 * @template Input The input `ReadOnlyCollection`.
 */
export type KeyOf<Input extends ReadOnlyCollection> = Input extends ArrayLike
	? NeverFallback<
			Defined<Exclude<Partial<Input>["length"], Input["length"]>>,
			number
	  >
	: `${Exclude<keyof Input, symbol>}`;
