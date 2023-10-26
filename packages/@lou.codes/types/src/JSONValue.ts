import type { Primitive } from "./Primitive.js";

/**
 * Possible parsed JSON value.
 *
 * @category Common
 * @remarks
 * Following the JSON specification, the result of a `JSON.parse` call can be
 * one of a given set of types. This type is a union of all of those types.
 * @example
 * ```typescript
 * const json: JSONValue = JSON.parse('{"foo": "bar"}');
 * ```
 * @see [JSON](https://www.json.org/json-en.html)
 */
export type JSONValue =
	| Exclude<Primitive, bigint | symbol | undefined>
	| ReadonlyArray<JSONValue>
	| { readonly [property: string]: JSONValue };
