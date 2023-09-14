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
 * const definitelyDefined: Defined<typeof maybeUndefined> = "🟢";
 * ```
 * @see {@link Maybe}
 */
export type Defined<Input> = Exclude<Input, undefined>;
