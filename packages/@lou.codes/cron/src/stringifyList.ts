import type { Maybe } from "@lou.codes/types";
import type { Field } from "./Field.js";
import type { ListString } from "./ListString.js";
import { isListField } from "./isListField.js";
import { stringifyRange } from "./stringifyRange.js";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Turns cron list into a string.
 *
 * @category Cron Object
 * @example
 * ```typescript
 * stringifyList([10, 11, 13]); // "10,11,13"
 * ```
 * @see {@link isListField}
 * @see {@link stringifyRange}
 *
 * @param field List cron object field
 * @returns String list or `undefined` if it isn't a list.
 */
export const stringifyList = (field: Readonly<Field<number>>) =>
	(isListField(field) ?
		field
			.map(item => stringifyRange(item) ?? `${item as number}`)
			.join(LIST_EXPRESSION_SEPARATOR_TOKEN)
	:	undefined) as Maybe<ListString>;
