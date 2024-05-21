import { isArray, isNumber } from "@lou.codes/predicates";
import type { Field } from "./Field.js";
import type { ListField } from "./ListField.js";
import { isRangeField } from "./isRangeField.js";

/**
 * Predicate checking if given value is a {@link ListField}.
 *
 * @category Predicate
 * @see {@link ListField}
 * @see {@link isRangeField}
 */
export const isListField = (value: Field<number>): value is ListField<number> =>
	isArray(value) && value.every(item => isNumber(item) || isRangeField(item));
