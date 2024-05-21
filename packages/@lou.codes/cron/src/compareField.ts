import type { AllToken } from "./AllToken.js";
import type { Field } from "./Field.js";
import { compareRangeOrValue } from "./compareRangeOrValue.js";
import { isListField } from "./isListField.js";

/**
 * Checks if given value is included in given field.
 *
 * @category Internal
 * @example
 * ```typescript
 * compareField(13, 13); // true
 * compareField(13, 99); // false
 * compareField(13, {from: 0, to: 99 }); // true
 * compareField(13, {from: 0, to: 10 }); // false
 * compareField(13, [10, 13]); // true
 * compareField(13, [10, 11, 12]); // false
 * compareField(13, [10, { from: 11, to: 99 }]); // true
 * compareField(13, [5, { from: 10, to: 12 }]); // false
 * ```
 * @param value Value to compare.
 * @param field Field to compare.
 * @returns `true` if value is included in the given `field`, `false` if it isn't.
 */
export const compareField = (
	value: number,
	field: Exclude<Field<number>, AllToken>,
) =>
	isListField(field) ?
		field.some(compareRangeOrValue(value))
	:	compareRangeOrValue(value)(field);
