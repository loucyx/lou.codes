import { attempt } from "@vangware/parsers";
import type { ReadOnly, RegularExpression } from "@vangware/types";
import { isString } from "./isString.js";

/**
 * Given a regular expression and a string, returns `true` if the string matches the regular expression.
 *
 * @category Primitive
 * @example
 * ```typescript
 * const matchNumbers = match(/\d+/u);
 *
 * matchNumbers("123"); // true
 * matchNumbers("abc"); // false
 * ```
 * @param regularExpression Instance of `RegExp` or a string.
 * @returns `true` if the string matches the regular expression, `false` otherwise.
 */
export const match = (
	regularExpression: ReadOnly<RegExp> | RegularExpression,
) => {
	const { flags, source } = isString(regularExpression)
		? {
				...(/\/(?<source>.+)\/(?<flags>[gimsu])+$/u.exec(
					regularExpression,
				)?.groups as Pick<RegExp, "flags" | "source">),
		  }
		: regularExpression;
	const attemptTest = attempt((text: string) =>
		new RegExp(source, flags).test(text),
	);

	return (text: string) => attemptTest(text) ?? false;
};
