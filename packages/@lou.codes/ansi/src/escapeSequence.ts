/**
 * Takes an `input` string and returns an escaped sequence based on it.
 *
 * @category Common
 * @remarks
 * Escape sequences are used to control the cursor, change colors, and more in
 * the terminal. They are preceded by the ESC character (ASCII code 27, or 0x1b).
 * This functions prepends any given string with the ESC character.
 * @example
 * ```typescript
 * escapeSequence("Lou"); // "\x1bLou"
 * ```
 * @see [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code)
 *
 * @template Input String to escape generic.
 * @param input String to escape.
 * @returns String with ESC character prepended.
 */
export const escapeSequence = <const Input extends string>(input: Input) =>
	`\u001B${input}` as const;
