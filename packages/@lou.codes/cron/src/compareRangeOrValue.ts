import type { ValueOrRangeField } from "./ValueOrRangeField.js";
import { isRangeField } from "./isRangeField.js";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.js";

/**
 * Compares `value` to a {@link ValueOrRangeField}.
 *
 * @category Internal
 * @example
 * ```typescript
 * compareRangeOrValue(13)({ from: 0, to: 99 }); // true
 * compareRangeOrValue(13)({ from: 0, to: 10 }); // false
 * compareRangeOrValue(13)(13); // true
 * compareRangeOrValue(13)(14); // false
 * ```
 * @param value Value to be compared.
 * @returns Curried function expecting a {@link ValueOrRangeField}.
 */
export const compareRangeOrValue =
	(value: number) => (valueOrRange: ValueOrRangeField<number>) =>
		isRangeField(valueOrRange) ?
			value >= valueOrRange[FROM_NAME] && value <= valueOrRange[TO_NAME]
		:	value === valueOrRange;
