import type { RangeString } from "./RangeString.js";

/**
 * Union of a set any number and a {@link RangeString}.
 *
 * @category Cron String
 */
export type ValueOrRangeString = `${number}` | RangeString;
