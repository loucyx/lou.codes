import { freeze } from "@lou.codes/constants/Object.js";
import { add } from "./add.js";
import { divide } from "./divide.js";
import { multiply } from "./multiply.js";
import { subtract } from "./subtract.js";

/**
 * A chainable set of operations.
 *
 * @category Operations
 * @example
 * ```typescript
 * chain(0.1).add(0.2).value; // 0.3
 * chain(0.7).plus(0.3).dividedBy(4).times(2).minus(0.2).value; // 0.3
 * ```
 * @see {@link add}
 * @see {@link divide}
 * @see {@link multiply}
 * @see {@link subtract}
 *
 * @param value Value to run operations on.
 * @returns An object with `divideBy`, `minus`, `plus` and `times` methods and a `value` property.
 */
export const chain = (value: number) =>
	freeze({
		/**
		 * Divide previous `value` in chain by the given `divisor`
		 * @param divisor Value to divide by.
		 *
		 * @returns Chain object (use `value` to get the final value).
		 */
		dividedBy: (divisor: number) => chain(divide(divisor)(value)),

		/**
		 * Subtracts given `subtrahend` to the current `value` in the chain.
		 * @param subtrahend Value to subtract.
		 *
		 * @returns Chain object (use `value` to get the final value).
		 */
		minus: (subtrahend: number) => chain(subtract(subtrahend)(value)),

		/**
		 * Adds given `addend` to the current `value` in the chain.
		 * @param subtrahend Value to add.
		 *
		 * @returns Chain object (use `value` to get the final value).
		 */
		plus: (addend: number) => chain(add(addend)(value)),

		/**
		 * Multiplies previous `value` in chain times the given `multiplier`
		 * @param divisor Value to multiply by.
		 *
		 * @returns Chain object (use `value` to get the final value).
		 */
		times: (multiplier: number) => chain(multiply(multiplier)(value)),

		/**
		 * Get current value in the chain of operations.
		 *
		 * @returns Current value of the chain of operations.
		 */
		value,
	});
