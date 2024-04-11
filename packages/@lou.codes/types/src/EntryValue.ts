import type { Entry } from "./Entry.js";

/**
 * Value of an {@link Entry}.
 *
 * @category Array
 * @category Object
 * @remarks
 * Util type to get the value of an {@link Entry}.
 * @example
 * ```typescript
 * const entry: Entry<string, number> = ["🟢", 1];
 * const entryValue: EntryValue<typeof entry> = entry[1];
 * ```
 * @see {@link Entry}
 *
 * @template Input Entry type.
 */
export type EntryValue<Input extends Entry> = Input[1];
