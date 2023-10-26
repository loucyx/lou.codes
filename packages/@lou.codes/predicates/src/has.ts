import { isObject } from "./isObject.js";

/**
 * Curried wrapper for the `in` operator. Given a `property` name and an
 * `object`, returns `true` the object contains that property, `false`
 * otherwise.
 *
 * @category Objects
 * @example
 * ```typescript
 * const hasCircle = has("🟢");
 *
 * hasCircle({ "🟢": "🟩" }); // true
 * hasCircle({ "🟩": "🟢" }); // false
 * ```
 * @returns Curried function with `property` in context.
 */
export const has =
	<Property extends PropertyKey>(property: Property) =>
	(object: unknown): object is Readonly<Record<Property, unknown>> =>
		isObject(object) && property in object;
