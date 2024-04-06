export const {
	assign,
	create: createVanilla,
	defineProperty,
	entries,
	freeze,
	fromEntries,
	getOwnPropertyDescriptor,
	getPrototypeOf,
	hasOwn,
	is,
	values,
} = Object;

/**
 * Alias for `Object.create(null)` combined with `Object.assign` to create an
 * object without prototype.
 *
 * @returns Object with no prototype.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const create = <OutputType = {}>(object?: object) =>
	// eslint-disable-next-line unicorn/no-null
	assign(createVanilla(null), object) as OutputType;
