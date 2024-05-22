import { keys } from "@lou.codes/constants/Object.js";
import type { KeyOf, ReadOnlyArray } from "@lou.codes/types";
import { build, or } from "functional-expression";
import type { FieldString } from "./FieldString.js";
import { normalizeMap } from "./normalizeMap.js";

/**
 * Normalizes day and month 3 letter aliases into their number counterparts.
 *
 * @category Cron String
 * @example
 * ```typescript
 * normalizeAliases("* * 13 oct fri"); // "* * 13 10 5"
 * ```
 * @param expression String expression.
 * @returns Normalized expression
 */
export const normalizeAliases = (expression: string) =>
	expression.replaceAll(
		build("giu")(
			or(
				...(keys(normalizeMap) as ReadOnlyArray<
					KeyOf<typeof normalizeMap>
				>),
			),
		),
		alias =>
			`${normalizeMap[alias.toLocaleLowerCase() as KeyOf<typeof normalizeMap>]}`,
	) as FieldString;
