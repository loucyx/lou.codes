import type { Strigifiable } from "@lou.codes/types";

/**
 * Escape given string with a `\`.
 *
 * @category Util
 * @example
 * ```typescript
 * escape("n"); // "\\n"
 * ```
 * @param escaped Value to escape.
 * @returns Escaped value.
 */
export const escape = <const Escaped extends Strigifiable>(escaped: Escaped) =>
	`\\${escaped}` as const;
