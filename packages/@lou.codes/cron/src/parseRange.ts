import { entriesToObject } from "@lou.codes/iterables";
import type { Maybe } from "@lou.codes/types";
import type { RangeField } from "./RangeField.js";
import { isRangeString } from "./isRangeString.js";
import { parseNumberMap } from "./parseNumberMap.js";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.js";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";
import { zipRangeNames } from "./zipRangeNames.js";

/**
 * Parses a cron range into an object.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseRange("1-13"); // { from: 1, to: 13 }
 * parseRange("13-13"); // 13 (normalized)
 * parseRange("13-1"); // undefined
 * ```
 * @see {@link isRangeString}
 * @see {@link zipRangeNames}
 * @see {@link parseNumberMap}
 *
 * @param value String that might be a range.
 * @returns Parsed ranged of `undefined` if it isn't a range string.
 */
export const parseRange = <Predicated extends number>(value: string) => {
	const maybeRange =
		isRangeString(value) ?
			entriesToObject(
				zipRangeNames(
					parseNumberMap(
						value.split(RANGE_EXPRESSION_SEPARATOR_TOKEN),
					),
				),
			)
		:	undefined;

	return (
		maybeRange?.[FROM_NAME] === maybeRange?.[TO_NAME] ?
			maybeRange?.[FROM_NAME]
		:	maybeRange) as Maybe<Predicated | RangeField<Predicated>>;
};
