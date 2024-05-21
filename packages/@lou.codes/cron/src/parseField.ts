import { parseDecimal } from "@lou.codes/parsers";
import { isAllToken } from "./isAllToken.js";
import { parseList } from "./parseList.js";
import { parseRange } from "./parseRange.js";

/**
 * Parses a cron field.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseField("*"); // "*"
 * parseField("13"); // 13
 * parseField("10,11,13"); // [10, 11, 13]
 * parseField("1-10"); // { from: 1, to: 10 }
 * ```
 * @see {@link isAllToken}
 * @see {@link parseList}
 * @see {@link parseRange}
 *
 * @param field Cron field value (should be validated before this).
 * @returns Parsed field.
 */
export const parseField = (field: string) =>
	isAllToken(field) ? field : (
		parseList(field) ?? parseRange(field) ?? parseDecimal(field)
	);
