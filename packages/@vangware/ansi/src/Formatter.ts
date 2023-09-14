import type { Function, ReadOnlyArray } from "@vangware/types";

/**
 * Formatter function that takes a string or a tagged template.
 *
 * @category Common
 * @remarks
 * Type to represent a function that works both directly on a string or as a
 * tagged template function.
 * @example
 * ```typescript
 * const formatter: Formatter = (input, ...expressions) =>
 * 	typeof input === "string"
 * 		? input
 * 		: input
 * 				.flatMap((string, index) => [string, expressions[index] ?? ""])
 * 				.join("");
 *
 * formatter("Vangware"); // "Vangware"
 * formatter`Vangware`; // "Vangware"
 * ```
 * @see [Tagged templates](https://mdn.io/Tagged%20templates)
 *
 * @param input Array of strings for template strings or a single string,
 * followed by an array of expressions (if any).
 * @returns A plain string.
 */
export type Formatter = Function<
	readonly [
		input: TemplateStringsArray | string,
		...expressions: ReadOnlyArray,
	],
	string
>;
