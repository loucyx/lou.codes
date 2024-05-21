import { has, isNumber, isObject } from "@lou.codes/predicates";
import type { RangeField } from "./RangeField.js";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.js";

/**
 * Predicate checking if given value is a cron object range ({@link RangeField}).
 *
 * @category Predicate
 * @see {@link RangeField}
 */
export const isRangeField = (value: unknown): value is RangeField<number> =>
	isObject(value) &&
	has(FROM_NAME)(value) &&
	has(TO_NAME)(value) &&
	isNumber(value[FROM_NAME]) &&
	isNumber(value[TO_NAME]) &&
	value[FROM_NAME] < value[TO_NAME];
