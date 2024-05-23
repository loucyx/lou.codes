import { parseDecimal } from "@lou.codes/parsers";
import type { Maybe } from "@lou.codes/types";
import { parseNumberMatch } from "./parseNumberMatch.js";

/**
 * Parses a cron list into an array.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseNumber("5"); // 5
 * parseNumber("13"); // 13
 * parseNumber("59"); // 59
 * parseNumber("60"); // undefined (60 isn't valid for any cron field)
 * ```
 *
 * @param value String that might be a list.
 * @returns Parsed list of `undefined` if it isn't a list string.
 */
export const parseNumber = <Predicated extends number>(value: string) =>
	(parseNumberMatch(value) ?
		parseDecimal(value)
	:	undefined) as Maybe<Predicated>;
