import { map } from "@lou.codes/iterables";
import type { CronObject } from "./CronObject.js";
import { parseField } from "./parseField.js";

/**
 * Given an iterable of tuples with the name of a field and a field value,
 * run each field through {@link parseField}.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseFieldTuplesMap([["minute", "*"]]); // [["minute", "*"]]
 * parseFieldTuplesMap([["minute", "13"]]); // [["minute", 13]]
 * parseFieldTuplesMap([["minute", "10,11,13"]]); // [["minute", [10, 11, 13]]]
 * parseFieldTuplesMap([["minute", "1-10"]]); // [["minute", { from: 1, to: 10 }]]
 * ```
 * @see {@link parseField}
 */
export const parseFieldTuplesMap = map(
	([name, field]: readonly [name: keyof CronObject, field: string]) =>
		[name, parseField(field)] as const,
);
