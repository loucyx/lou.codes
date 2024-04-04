import type { Numeric } from "@lou.codes/types";
import { cryptoNumber } from "@lou.codes/utils";
import { createIterableIterator } from "./createIterableIterator.js";

/**
 * Deterministic pseudo-random number generator.
 *
 * **⚠️ IMPORTANT:** This only works in secure contexts (HTTPS/Node).
 *
 * @category Asynchronous Generators
 * @example
 * ```typescript
 * const seededRandom = random("some seed");
 * const random0To10 = seededRandom(0)(10);
 *
 * [...pick(2)(random0To10)]; // Two "random" values between 0 and 10
 * [...pick(2)(random0To10)]; // Same two "random" values between 0 and 10
 * ```
 * @see [SubtleCrypto#digest](https://mdn.io/SubtleCrypto.digest)
 * @see [cryptoNumber](https://lou.codes/libraries/lou_codes_utils/#cryptoNumber)
 * @param seed Seed to be used to generate random numbers.
 * @returns Curried generator function with `seed` set in context.
 */
export const random =
	(seed: Numeric | string) => (from: number) => (to: number) =>
		createIterableIterator(async function* () {
			// eslint-disable-next-line functional/no-let
			let state: typeof seed = seed;
			const min = from < to ? from : to;
			const max = from > to ? from : to;

			// eslint-disable-next-line functional/no-loop-statements, @typescript-eslint/no-unnecessary-condition
			while (true) {
				yield Math.min(
					Math.max(
						(state =
							(await cryptoNumber(`${state}(${min}-${max})`)) *
								(max + 2 - min) +
							(min - 1)),
						min,
					),
					max,
				);
			}
		});
