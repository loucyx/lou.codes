import type { Function } from "./Function.js";

/**
 * `typeof` dictionary.
 *
 * @category Common
 * @remarks
 * Dictionary of types and their `typeof` values, including the proposed but
 * never added type `"null"` for `null`.
 * @example
 * ```typescript
 * TypeOfMap["string"]; // `string`
 * TypeOfMap["boolean"]; // `boolean`
 * TypeOfMap["function"]; // `GenericFunction`
 * ```
 * @see [typeof null bug](https://luke.sh/null-bug)
 * @see [typeof typeof rejected proposal](https://luke.sh/null-typeof)
 */
export type TypeOfDictionary = {
	/** {@link TypeOfDictionary} key for `BigInt` */
	readonly bigint: bigint;
	/** {@link TypeOfDictionary} key for `Boolean` */
	readonly boolean: boolean;
	/** {@link TypeOfDictionary} key for `Function` */
	readonly function: Function;
	/** {@link TypeOfDictionary} key for `null` */
	readonly null: null;
	/** {@link TypeOfDictionary} key for `Number` */
	readonly number: number;
	/** {@link TypeOfDictionary} key for `Object` */
	readonly object: object;
	/** {@link TypeOfDictionary} key for `String` */
	readonly string: string;
	/** {@link TypeOfDictionary} key for `Symbol` */
	readonly symbol: symbol;
	/** {@link TypeOfDictionary} key for `undefined` */
	readonly undefined: undefined;
};
