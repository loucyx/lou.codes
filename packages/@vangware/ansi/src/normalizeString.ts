import type { ReadOnlyArray } from "@vangware/types";

/**
 * Takes a string or a template string and returns a plain string.
 *
 * @category Common
 * @example
 * ```ts
 * normalizeString(`Hello ${13}!`); // "Hello 13!"
 * normalizeString`Hello ${13}!`; // "Hello 13!"
 * ```
 * @see [Tagged templates](https://mdn.io/Tagged%20templates)
 *
 * @param input String or template string.
 * @param expressions Possible values passed to the template string.
 * @returns Plain string.
 */
export const normalizeString = <Input extends TemplateStringsArray | string>(
	input: Input,
	...expressions: ReadOnlyArray
) =>
	(typeof input === "string"
		? input
		: input
				.flatMap((string, index) => [string, expressions[index] ?? ""])
				.join("")) as Input extends string ? Input : string;
