import type { ReadOnlyArray } from "@lou.codes/types";
import type { ValueOrRangeField } from "./ValueOrRangeField.js";

/**
 * Type that represents a list of values for a cron object field.
 *
 * @category Cron Object
 *
 * @see {@link ValueOrRangeField}
 */
export type ListField<Value extends number> = ReadOnlyArray<
	ValueOrRangeField<Value>
>;
