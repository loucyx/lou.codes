import type { RegularExpressionFlags } from "./RegularExpressionFlags.js";

/**
 * String representing a regular expression.
 *
 * @category RegExp
 * @remarks
 * Safer than `string` and simpler than `RegExp` type to represent a regular
 * expression. It `RegularExpression` to enforce flags to always have `u` and
 * have a consistent order.
 * @example
 * ```typescript
 * const regex: RegularExpression = "/^[a-z]+$/u";
 * ```
 * @see {@link RegularExpressionFlags}
 * @see [Regular Expressions](https://mdn.io/Regular%20expressions)
 */
export type RegularExpression = `/${string}/${RegularExpressionFlags}`;
