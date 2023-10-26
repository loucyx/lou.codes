import type { EmptyString } from "./EmptyString.js";

/**
 * ISO year values in string format (from `"-271821"` to `"275760"`).
 *
 * @category Date
 * @remarks
 * Stricter than `string` type for year values, limited to valid values from
 * `"-271821"` to `"275760"`, and giving type errors otherwise.
 * @example
 * ```typescript
 * const years: Iterable<ISOYear> = ["2020", "-1000", "1989"];
 * ```
 * @see [Date](https://mdn.io/Date)
 */
export type ISOYear = `${EmptyString | "-"}${number}`;
