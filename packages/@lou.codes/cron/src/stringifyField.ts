import type { Field } from "./Field.js";
import type { FieldString } from "./FieldString.js";
import { isAllToken } from "./isAllToken.js";
import { stringifyList } from "./stringifyList.js";
import { stringifyRange } from "./stringifyRange.js";

/**
 * Takes a cron object and returns a string expression.
 *
 * @category Cron Object
 * @example
 * ```typescript
 * stringifyField("*"); // "*"
 * stringifyField(13); // "13"
 * stringifyField([10, 11, 13]); // "10,11,13"
 * stringifyField({ from: 1, to: 10 }); // "1-10"
 * ```
 * @see {@link isAllToken}
 * @see {@link stringifyList}
 * @see {@link stringifyRange}
 *
 * @param field Cron object field.
 * @returns Cron string field.
 */
export const stringifyField = (field: Field<number>) =>
	isAllToken(field) ? field : (
		((stringifyList(field) ??
			stringifyRange(field) ??
			`${field as number}`) as FieldString)
	);
