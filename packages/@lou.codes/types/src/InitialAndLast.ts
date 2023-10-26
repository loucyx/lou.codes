import type { ArrayLike } from "./ArrayLike.js";
import type { EmptyArray } from "./EmptyArray.js";
import type { EmptyString } from "./EmptyString.js";
import type { Head } from "./Head.js";
import type { Initial } from "./Initial.js";
import type { Last } from "./Last.js";
import type { Maybe } from "./Maybe.js";

/**
 * Get a couple with the initial and last types of an {@link ArrayLike}.
 *
 * @category Array
 * @category String
 * @remarks
 * Given a {@link ArrayLike}, this returns a couple with the type of all items
 * from the start until the item before last, and then the last.
 * @example
 * ```typescript
 * const array = ["🟢", "🟩", "💚"];
 * const initialAndLast: InitialAndLast<typeof array> = [["🟢", "🟩"], "💚"];
 * ```
 * @see {@link ArrayLike}
 * @see {@link EmptyArray}
 * @see {@link EmptyString}
 * @see {@link Head}
 * @see {@link Initial}
 * @see {@link Last}
 * @see {@link Maybe}
 *
 * @template Input Input `ArrayLike`.
 */
export type InitialAndLast<Input extends ArrayLike> = Input extends readonly [
	...infer InitialItems,
	infer LastItem,
]
	? readonly [initial: InitialItems, last: LastItem]
	: Input extends EmptyArray | EmptyString
	? readonly [initial: Input, last: undefined]
	: Input extends `${infer FirstCharacter}${infer RestOfString}`
	? readonly [
			initial: `${RestOfString extends EmptyString
				? EmptyString
				: FirstCharacter}${Head<InitialAndLast<RestOfString>>}`,
			last: `${RestOfString extends EmptyString
				? FirstCharacter
				: Last<RestOfString>}`,
	  ]
	: readonly [initial: Input, last: Maybe<Input[number]>];
