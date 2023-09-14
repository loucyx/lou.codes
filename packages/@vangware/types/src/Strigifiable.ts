import type { Primitive } from "./Primitive.js";

/**
 * Values that can be stringified.
 *
 * @category Common
 * @remarks
 * Type to represent all values that can be stringified, all primitives
 * excluding `symbol`: `string`, `number`, `bigint`, `boolean`, `undefined`,
 * and `null`.
 * @example
 * ```typescript
 * let value: Strigifiable = "hello";
 * value = 1;
 * value = true;
 * value = Symbol("hello"); // Error!
 * value = { toString: () => "hello" }; // Error!
 * ```
 * @see {@link Primitive}
 */
export type Strigifiable = Exclude<Primitive, symbol>;
