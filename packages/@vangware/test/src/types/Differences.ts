import type { ReadOnlyArray } from "@vangware/types";
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
 * @see [CreateDifference](https://vangware.com/libraries/vangware_diff/#createdifference)
 * @see [DeleteDifference](https://vangware.com/libraries/vangware_diff/#deletedifference)
 * @see [UpdateDifference](https://vangware.com/libraries/vangware_diff/#updatedifference)
 *
 * @template Value Type of values being compared.
 */
export type Differences = ReadOnlyArray<Difference>;
