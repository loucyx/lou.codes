import type { Numeric } from "@lou.codes/types";
import { constructDataView } from "./constructDataView.js";
import { constructTextEncoder } from "./constructTextEncoder.js";

const textEncoder = constructTextEncoder();

/**
 * Generates `number` using `SubtleCrypto#digest` and the given seed.
 *
 * **⚠️ IMPORTANT:** This only works in secure contexts (HTTPS/Node).
 *
 * @category Numbers
 * @example
 * ```typescript
 * const seededRandom1 = await random("some seed");
 * const seededRandom2 = await random("some seed");
 *
 * seededRandom1 === seededRandom2; // true because it has the same seed
 * ```
 * @see [SubtleCrypto#digest](https://mdn.io/SubtleCrypto.digest)
 * @see {@link constructDataView}
 * @see {@link constructTextEncoder}
 * @param seed Seed to be used to generate random numbers.
 * @returns Pseudo-random number from seed.
 */
export const cryptoNumber = async (seed: Numeric | string) =>
	crypto.subtle
		.digest("SHA-256", textEncoder.encode(`${seed}`))
		.then(
			stateHash =>
				constructDataView(stateHash).getUint32(0, true) / 0xff_ff_ff_ff,
		);
