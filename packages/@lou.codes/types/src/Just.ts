import type { Maybe } from "./Maybe.js";

/**
 * Excludes `undefined` of a type union.
 *
 * @category Common
 * @remarks
 * Every now and then a type is possibly `undefined`, this type gets rid of the
 * `undefined` in the union.
 * @example
 * ```typescript
 * const maybeUndefined: string | undefined = "🟢";
 * const defined: Just<typeof maybeUndefined> = "🟢"; // ok
 * const noDefined: Just<typeof maybeUndefined> = undefined; // error
 * ```
 * @see {@link Maybe}
 */
export type Just<Input> = Exclude<Input, undefined>;
