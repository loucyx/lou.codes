import type { AllToken } from "./AllToken.js";
import type { ListString } from "./ListString.js";
import type { ValueOrRangeString } from "./ValueOrRangeString.js";

/**
 * Union of {@link AllToken}, {@link ValueOrRangeString} and {@link ListString}
 * that represents a field in a cron expression.
 *
 * @category Cron String
 *
 * @see {@link AllToken}
 * @see {@link ValueOrRangeString}
 * @see {@link ListString}
 */
export type FieldString = AllToken | ListString | ValueOrRangeString;
