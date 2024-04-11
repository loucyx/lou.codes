import type { Entry } from "./Entry.js";

/**
 * Key of an {@link Entry}.
 *
 * @category Array
 * @category Object
 * @remarks
 * Util type to get the key of an {@link Entry}.
 * @example
 * ```typescript
 * const entry: Entry<string, number> = ["🟢", 1];
 * const entryKey: EntryKey<typeof entry> = entry[0];
 * ```
 * @see {@link Entry}
 *
 * @template Input Entry type.
 */
export type EntryKey<Input extends Entry> = Input[0];
