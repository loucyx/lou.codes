import { entriesToObject } from "@lou.codes/iterables";
import type { Maybe } from "@lou.codes/types";
import type { RangeField } from "./RangeField.js";
import { isRangeString } from "./isRangeString.js";
import { parseDecimalMap } from "./parseDecimalMap.js";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";
import { zipRangeNames } from "./zipRangeNames.js";

/**
 * Parses a cron range into an object.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseRange("1-13"); // { from: 1, to: 13 }
 * ```
 * @see {@link isRangeString}
 * @see {@link zipRangeNames}
 * @see {@link parseDecimalMap}
 *
 * @param value String that might be a range.
 * @returns Parsed ranged of `undefined` if it isn't a range string.
 */
export const parseRange = <Predicated extends number>(value: string) =>
	(isRangeString(value) ?
		entriesToObject(
			zipRangeNames(
				parseDecimalMap(value.split(RANGE_EXPRESSION_SEPARATOR_TOKEN)),
			),
		)
	:	undefined) as Maybe<RangeField<Predicated>>;
