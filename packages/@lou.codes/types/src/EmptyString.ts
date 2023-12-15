import type { EMPTY_STRING } from "@lou.codes/constants";

/**
 * Empty string.
 *
 * @category String
 * @remarks
 * This type is a string with no characters on it (length `0`).
 * {@link EmptyString}.
 * @example
 * ```typescript
 * const emptyString: EmptyString = "";
 * ```
 */
export type EmptyString = typeof EMPTY_STRING;
