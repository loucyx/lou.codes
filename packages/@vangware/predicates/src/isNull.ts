import { isType } from "./isType.js";

/**
 * `typeof` "null" alias. This "patches" typeof so `null` is not `"object"` but
 * `"null"` instead (rejected proposal for lack of backwards compatibility, more
 * details [here](https://luke.sh/null-typeof)).
 *
 * @category Primitives
 * @example
 * ```typescript
 * isNull(null); // true
 * isNull(undefined); // false
 * ```
 * @returns `true` if the given value is a `null`, `false` otherwise.
 */
export const isNull = isType("null");
