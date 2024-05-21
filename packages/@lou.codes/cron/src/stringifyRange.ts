import type { Maybe } from "@lou.codes/types";
import type { Field } from "./Field.js";
import type { RangeString } from "./RangeString.js";
import { isRangeField } from "./isRangeField.js";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.js";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Turn a cron range into a string.
 *
 * @category Cron Object
 * @example
 * ```typescript
 * parseRange({ from: 1, to: 13 }); // "1-13"
 * ```
 * @see {@link isRangeField}
 *
 * @param field Cron field to turn into a string.
 * @returns String ranged of `undefined` if it isn't a range object.
 */
export const stringifyRange = <Predicated extends number>(
	field: Readonly<Field<Predicated>>,
) =>
	(isRangeField(field) ?
		`${field[FROM_NAME]}${RANGE_EXPRESSION_SEPARATOR_TOKEN}${field[TO_NAME]}`
	:	undefined) as Maybe<RangeString>;
