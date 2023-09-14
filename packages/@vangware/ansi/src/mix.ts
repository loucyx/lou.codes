import type { ReadOnlyArray } from "@vangware/types";
import type { Formatter } from "./Formatter.js";

/**
 * Composes formatters.
 *
 * @category Common
 * @remarks
 * Given an array of formatters, it will return a new formatter that will apply
 * all of them to the input string.
 * @example
 * ```ts
 * const redTextWhiteBackground = mix(foregroundRed, backgroundWhite);
 *
 * redTextWhiteBackground("Vangware");
 * // It can also be used as a tag function for tagged templates:
 * redTextWhiteBackground`Vangware`;
 * ```
 * @see {@link Formatter}
 *
 * @param formatters Array of formatters to be composed.
 * @returns Formatter composed of the given formatters.
 */
export const mix =
	(...formatters: ReadOnlyArray<Formatter>): Formatter =>
	/**
	 * Function with formatters set in context.
	 *
	 * @example
	 * ```ts
	 * redTextWhiteBackground("Vangware");
	 * // It can also be used as a tag function for tagged templates:
	 * redTextWhiteBackground`Vangware`;
	 * ```
	 * @see {@link mix}
	 *
	 * @param input String or template string.
	 * @param expressions Possible values passed to the template string.
	 * @returns Formatted string.
	 */
	(input, ...expressions) =>
		formatters.reduce(
			(output, formatter) => formatter(output, ...expressions),
			input,
		) as string;
