/* eslint-disable @typescript-eslint/unbound-method */

/**
 * Alias for `Object` (not exported, only for minification).
 *
 * @see [Object](https://mdn.io/Object)
 */
const ObjectAlias = Object;

export const {
	assign,
	defineProperty,
	entries,
	freeze,
	fromEntries,
	getOwnPropertyDescriptor,
	getPrototypeOf,
	hasOwn,
	is,
	values,
} = ObjectAlias;

/**
 * Alias for `Object.create(null)` combined with `Object.assign` to create an
 * object without prototype.
 *
 * @see [Object.assign](https://mdn.io/Object.assign)
 * @see [Object.create](https://mdn.io/Object.create)
 *
 * @returns Object with no prototype.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const create = <OutputType = {}>(object?: object) =>
	// eslint-disable-next-line unicorn/no-null
	assign(ObjectAlias.create(null), object) as OutputType;
