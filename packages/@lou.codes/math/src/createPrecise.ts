import { freeze } from "@lou.codes/constants/Object.js";
import { EMPTY_ARRAY } from "@lou.codes/constants/empty.js";
import { isBigInt } from "@lou.codes/predicates";
import type { MaybeInfinity } from "./MaybeInfinity.js";
import type { Precise } from "./Precise.js";

/**
 * Takes a `base` and `exponent` and normalizes it returning a {@link Precise}.
 *
 * @category Internal
 * @example
 * ```typescript
 * createPrecise(13n); // [13n]
 * createPrecise(13n, -1n); // [13n, -1n]
 * createPrecise(1300n, 0n); // [13n, 2n]
 * ```
 * @see {@link Precise}
 *
 * @param base Base of the {@link Precise}.
 * @param exponent Exponent of the {@link Precise}.
 * @returns A normalized {@link Precise} value.
 */
export const createPrecise: {
	(base: bigint, exponent?: bigint): Precise;
	(base: number): Precise;
} = (base: MaybeInfinity, exponent: bigint = 0n) => {
	if (isBigInt(base)) {
		const stringBase = `${base}`;
		const normalizedBase = stringBase.replace(/0+$/u, "");
		const normalizedExponent =
			BigInt(stringBase.length - normalizedBase.length) + exponent;

		return freeze([
			BigInt(normalizedBase),
			...(normalizedExponent === 0n ? EMPTY_ARRAY : [normalizedExponent]),
		]) as Precise;
	} else {
		return freeze([base]) as Precise;
	}
};
