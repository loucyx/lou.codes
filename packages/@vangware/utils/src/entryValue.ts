import type { Entry, EntryValue } from "@vangware/types";
import { get } from "./get.js";

/**
 * Get value of an `Entry`.
 *
 * @category Functions
 * @example
 * ```typescript
 * entryKey(["key", "value"]); // "value"
 * ```
 * @param entry Entry to get vale from.
 * @returns Value of an `Entry`.
 */
export const entryValue = get(1) as <InputEntry extends Entry>(
	entry: InputEntry,
) => EntryValue<InputEntry>;
