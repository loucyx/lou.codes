import { createPrecise } from "./createPrecise.js";

/**
 * Turns a `number` into a {@link Precise}.
 *
 * @category Internal
 * @example
 * ```typescript
 * numberToPrecise(13); // [13n]
 * numberToPrecise(1.3); // [13n, -1n]
 * numberToPrecise(1300); // [13n, 2n]
 * ```
 * @see {@link createPrecise}
 *
 * @param number Number to convert.
 * @returns A {@link Precise} representation of the given `number`.
 */
export const numberToPrecise = (number: number) => {
	const [base = "0", exponent = "0"] = `${number}`.split("e");
	const [integral = "0", fractional = ""] = `${base}`.split(".");

	return createPrecise(
		BigInt(`${integral}${fractional}`),
		-(BigInt(fractional.length) - BigInt(exponent)),
	);
};
