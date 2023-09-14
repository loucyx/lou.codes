import type { EmptyString } from "./EmptyString.js";

/**
 * Possible combinations of regular expression flags (with mandatory `u` flag).
 *
 * @category RegExp
 * @remarks
 * Type union stricter than `string` type for RegExp flags. The unicode flag is
 * mandatory to ensure unicode characters are always supported.
 * @example
 * ```typescript
 * const flags1: RegularExpressionFlags = "u";
 * const flags2: RegularExpressionFlags = "gu";
 * const flags3: RegularExpressionFlags = "iu";
 * const flags4: RegularExpressionFlags = "giu";
 * ```
 * @see [Regular Expressions](https://mdn.io/Regular%20expressions)
 */
export type RegularExpressionFlags = `${EmptyString | "g"}${EmptyString | "i"}${
	| EmptyString
	| "m"}${EmptyString | "s"}u`;
