import type { ArrayLike } from "./ArrayLike.js";
import type { Just } from "./Just.js";
import type { NeverFallback } from "./NeverFallback.js";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 * @remarks
 * Type to represent the type of the key in an array or object. It
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
 *
 * @template Type Object or array type.
 */
export type KeyOf<Type extends object> =
	Type extends ArrayLike ?
		NeverFallback<
			Just<Exclude<Partial<Type>["length"], Type["length"]>>,
			number
		>
	:	`${Exclude<keyof Type, symbol>}`;
