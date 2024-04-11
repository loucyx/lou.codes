import type { ReadOnlyArray } from "@lou.codes/types";
import type { Difference } from "./Difference.js";

/**
 * Array of `Difference`.
 *
 * @category Test
 * @example
 * ```typescript
 * const differences: Differences<string> = [
 * 	{
 * 		kind: "UPDATE",
 * 		left: "🟢",
 * 		path: ["🟢", "🟩"],
 * 		right: "🟩",
 * 	}
 * ];
 * ```
 * @see {@link Difference}
 * @see [CreateDifference](https://lou.codes/libraries/lou_codes_diff/#createdifference)
 * @see [DeleteDifference](https://lou.codes/libraries/lou_codes_diff/#deletedifference)
 * @see [UpdateDifference](https://lou.codes/libraries/lou_codes_diff/#updatedifference)
 *
 * @template Value Type of values being compared.
 */
export type Differences = ReadOnlyArray<Difference>;
