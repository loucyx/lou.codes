import { parseDecimal } from "@lou.codes/parsers";
import type { RangeString } from "./RangeString.js";
import { rangeStringMatch } from "./rangeStringMatch.js";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Predicate checking if given value is a cron string range
 * ({@link RangeString}).
 *
 * @category Predicate
 * @see {@link RangeString}
 * @see {@link rangeStringMatch}
 */
export const isRangeString = (value: string): value is RangeString =>
	rangeStringMatch(value) &&
	(([from, to]) => from < to)(
		value.split(RANGE_EXPRESSION_SEPARATOR_TOKEN).map(parseDecimal) as [
			from: number,
			to: number,
		],
	);
