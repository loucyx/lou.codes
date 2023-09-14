import type { Function } from "./Function.js";
import type { ReadOnly } from "./ReadOnly.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";

/**
 * Tag function for tagged templates.
 *
 * @category Function
 * @category String
 * @remarks
 * Type to represent a tag function for tagged templates, which takes a
 * `TemplateStringArray` and any number of expressions, and returns a value of
 * type `Output` (`string` by default).
 * @example
 * ```typescript
 * const intParser: Tagger<number> = strings => parseInt(strings.join(""), 10);
 * intParser`100`; // 100
 * ```
 * @see {@link Function}
 * @see {@link ReadOnly}
 * @see {@link ReadOnlyArray}
 *
 * @template Output Type of the output value.
 * @template Expressions Type of the expressions.
 */
export type Tagger<
	Output = string,
	Expressions extends ReadOnlyArray = ReadOnlyArray,
> = Function<
	readonly [
		templateStrings: TemplateStringsArray,
		...expressions: Expressions,
	],
	Output
>;
