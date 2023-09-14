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
 * 		kind: "E",
 * 		path: ["🟢", "🟩"],
 * 		lhs: "🟢",
 * 		rhs: "🟩",
 * 	}
 * ];
 * ```
 * @see [deep-diff](https://npm.im/deep-diff)
 * @see {@link Difference}
 *
 * @template Value Type of values being compared.
 */
export type Differences<Value = unknown> = ReadOnlyArray<Difference<Value>>;
