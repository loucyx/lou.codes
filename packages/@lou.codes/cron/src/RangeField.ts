import type { FROM_NAME, TO_NAME } from "./rangeFieldNames.js";

/**
 * Type that represents a range of values for a cron object field.
 *
 * @category Cron Object
 */
export type RangeField<Value extends number> = {
	/**
	 * Start of the range, must be lower than `to`.
	 */
	readonly [FROM_NAME]: Value;

	/**
	 * End of the range, must be higher than `from`.
	 */
	readonly [TO_NAME]: Value;
};
