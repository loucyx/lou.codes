import { match } from "@lou.codes/predicates";
import {
	DIGIT,
	END,
	START,
	build,
	group,
	join,
	or,
	range,
	set,
} from "functional-expression";
import { paddedRegExp } from "./paddedRegExp.js";

/**
 * Matches only valid number values for a cron expression (from `0` or `00` to
 * `59`).
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseNumberMatch("13"); // true
 * parseNumberMatch("05"); // true
 * parseNumberMatch("60"); // false
 * parseNumberMatch("foo"); // false
 * ```
 *
 * @see {@link paddedRegExp}
 */
export const parseNumberMatch = match(
	build("u")(
		START,
		group(or(paddedRegExp(DIGIT), join(set(range(1)(5)), DIGIT))),
		END,
	),
);
