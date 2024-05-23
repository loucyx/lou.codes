import { map } from "@lou.codes/iterables";
import { parseNumber } from "./parseNumber.js";

/**
 * Maps given iterable through {@link parseNumber}.
 *
 * @category Cron String
 * @example
 * ```typescript
 * parseNumberMap(["05"]); // [5]
 * parseNumberMap(["13"]); // [13]
 * parseNumberMap(["59"]); // [59]
 * parseNumberMap(["60"]); // [undefined] (60 isn't valid for any cron field)
 * ```
 * @see {@link parseNumber}
 */
export const parseNumberMap = map(parseNumber);
