import type { Entry, EntryKey } from "@vangware/types";
import { get } from "./get.js";

/**
 * Get key of an `Entry`.
 *
 * @category Functions
 * @example
 * ```typescript
 * entryKey(["key", "value"]); // "key"
 * ```
 * @param entry Entry to get key from.
 * @returns Key of an `Entry`.
 */
export const entryKey = get(0) as <InputEntry extends Entry>(
	entry: InputEntry,
) => EntryKey<InputEntry>;
