import { iterableToArray, unique } from "@lou.codes/iterables";
import type { Maybe } from "@lou.codes/types";
import type { ListField } from "./ListField.js";
import { isListString } from "./isListString.js";
import { parseListMap } from "./parseListMap.js";
import { parseRange } from "./parseRange.js";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Parses a cron list into an array.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseList("10,11,13"); // [10, 11, 13]
 * ```
 * @see {@link isListString}
 * @see {@link parseRange}
 *
 * @param value String that might be a list.
 * @returns Parsed list of `undefined` if it isn't a list string.
 */
export const parseList = <Predicated extends number>(value: string) =>
	(isListString(value) ?
		iterableToArray(
			unique(parseListMap(value.split(LIST_EXPRESSION_SEPARATOR_TOKEN))),
		)
	:	undefined) as Maybe<ListField<Predicated>>;
