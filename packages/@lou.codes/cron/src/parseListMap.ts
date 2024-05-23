import { map } from "@lou.codes/iterables";
import { parseNumber } from "./parseNumber.js";
import { parseRange } from "./parseRange.js";

/**
 * Map to parse cron list items (can be either a range or a number).
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseListMap(["1", "05", "13", "5-13", "13-13", "13-5", "99"]);
 * // [1, 5, 13, { from: 5, to: 13 }, 13, undefined, undefined]
 * ```
 * @see {@link parseNumber}
 * @see {@link parseRange}
 */
export const parseListMap = map(
	(item: string) => parseRange(item) ?? parseNumber(item),
);
