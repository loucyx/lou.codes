import type { Maybe } from "./Maybe.js";

/**
 * Nullish value (either `null` or `undefined`).
 *
 * @category Common
 * @remarks
 * This type is useful for cases where a value might be `null` or `undefined`,
 * generally meant to be dealt with using the `??` operator.
 * @example
 * ```typescript
 * const nullishUndefined: Nullish = undefined;
 * const nullishNull: Nullish = null;
 * ```
 * @see {@link Maybe}
 * @see [Nullish](https://mdn.io/Nullish%20value)
 */
export type Nullish = Maybe<null>;
