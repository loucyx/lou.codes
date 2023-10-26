import type {
	CreateDifference,
	DeleteDifference,
	UpdateDifference,
} from "@lou.codes/diff";
import type { EXCEPTION } from "../constants.js";

/**
 * Difference object from `@lou.codes/diff`, with an added "EXCEPTION" kind.
 *
 * @category Test
 * @example
 * ```typescript
 * const difference: Difference = {
 * 	kind: "UPDATE",
 * 	left: "🟢",
 * 	path: ["🟢", "🟩"],
 * 	right: "🟩",
 * };
 * ```
 * @see [CreateDifference](https://lou.codes/libraries/lou_codes_diff/#createdifference)
 * @see [DeleteDifference](https://lou.codes/libraries/lou_codes_diff/#deletedifference)
 * @see [UpdateDifference](https://lou.codes/libraries/lou_codes_diff/#updatedifference)
 *
 * @template Value Type of value being compared.
 */
export type Difference =
	| CreateDifference
	| DeleteDifference
	| UpdateDifference
	| {
			/** Error object or message. */
			readonly error: unknown;
			/** Difference exception kind. */
			readonly kind: typeof EXCEPTION;
	  };
