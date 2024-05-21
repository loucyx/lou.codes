import type { AllToken } from "./AllToken.js";
import type { ListField } from "./ListField.js";
import type { ValueOrRangeField } from "./ValueOrRangeField.js";

/**
 * Union of {@link AllToken}, {@link ValueOrRangeField} and {@link ListField}
 * that represents a field in a cron expression.
 *
 * @category Cron Object
 *
 * @see {@link AllToken}
 * @see {@link ValueOrRangeField}
 * @see {@link ListField}
 */
export type Field<Value extends number> =
	| AllToken
	| ValueOrRangeField<Value>
	| ListField<Value>;
