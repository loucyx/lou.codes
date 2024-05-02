import type { Precise } from "./Precise.js";
import { numberToPrecise } from "./numberToPrecise.js";
import { preciseToNumber } from "./preciseToNumber.js";

/**
 * Turns a {@link Precise} operation into a number operation.
 *
 * @category Internal
 * @example
 * ```typescript
 * const add = pipe(preciseAdd);
 *
 * add(0.1)(0.2); // 0.3
 * ```
 * @see {@link numberToPrecise}
 * @see {@link Precise}
 * @see {@link preciseToNumber}
 *
 * @param preciseOperation {@link Precise} operation function.
 * @returns Number to number operation generated from `preciseOperation`.
 */
export const pipe =
	<
		PreciseOperation extends (
			...right: Precise
		) => (...left: Precise) => Precise,
	>(
		preciseOperation: PreciseOperation,
	) =>
	(right: number) => {
		const rightOperation = preciseOperation(...numberToPrecise(right));

		return (left: number) =>
			preciseToNumber(...rightOperation(...numberToPrecise(left)));
	};
