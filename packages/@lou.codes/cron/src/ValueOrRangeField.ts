import type { RangeField } from "./RangeField.js";

/**
 * Union of a set of numbers and a {@link RangeField} with that same set of
 * numbers.
 *
 * @category Cron Object
 */
export type ValueOrRangeField<Value extends number> = RangeField<Value> | Value;
