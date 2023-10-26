import type { Entry } from "./Entry.js";
import type { First } from "./First.js";

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
 * @see {@link First}
 *
 * @template Input Entry type.
 */
export type EntryKey<Input extends Entry> = First<Input>;
