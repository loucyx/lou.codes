import type { KeyOf } from "./KeyOf.js";

/**
 * Generic key for either object or array.
 *
 * @category Array
 * @category Object
 * @remarks
 * This type is used to get the type of the values in a collection (items of
 * an `ArrayLike` or properties of a `Record`).
 * @example
 * ```typescript
 * const object = {
 * 	"🟢": 1,
 * 	"🟩": 2,
 * };
 * const key: ValueOf<typeof object> = 1;
 * ```
 * @see {@link KeyOf}
 *
 * @template Type Object or array type.
 */
export type ValueOf<Type extends object> =
	KeyOf<Type> extends keyof Type ? Type[KeyOf<Type>] : never;
