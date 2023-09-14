import type { Nullish } from "./Nullish.js";
import type { Numeric } from "./Numeric.js";

/**
 * Valid JavaScript primitives.
 *
 * @category Common
 * @remarks
 * This type is a union of all the valid JavaScript primitives, including
 * `null`, `undefined`, `boolean`, `number`, `bigint`, `string`, and `symbol`.
 * @example
 * ```typescript
 * const aBigInt: Primitive = 13n;
 * const aBoolean: Primitive = true;
 * const aNull: Primitive = null;
 * const aNumber: Primitive = 13;
 * const anUndefined: Primitive = undefined;
 * const aString: Primitive = "🟢";
 * const aSymbol: Primitive = Symbol("🟢");
 * ```
 * @see {@link Nullish}
 * @see {@link Numeric}
 * @see [Primitive](https://mdn.io/Primitive)
 */
export type Primitive = Nullish | Numeric | boolean | string | symbol;
