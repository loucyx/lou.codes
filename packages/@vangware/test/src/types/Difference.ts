import type {
	CreateDifference,
	DeleteDifference,
	UpdateDifference,
} from "@vangware/diff";
import type { EXCEPTION } from "../constants.js";

/**
 * Difference object from `@vangware/diff`, with an added "EXCEPTION" kind.
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
 * @see [CreateDifference](https://vangware.com/libraries/vangware_diff/#createdifference)
 * @see [DeleteDifference](https://vangware.com/libraries/vangware_diff/#deletedifference)
 * @see [UpdateDifference](https://vangware.com/libraries/vangware_diff/#updatedifference)
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
