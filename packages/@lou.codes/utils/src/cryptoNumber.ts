import type { Numeric } from "@lou.codes/types";
import { then } from "./then.js";

const textEncoder = new TextEncoder();
const encode = textEncoder.encode.bind(textEncoder);
const thenSha256ToNumber = then(
	(sha256: ArrayBuffer) =>
		new DataView(sha256).getUint32(0, true) / 0xff_ff_ff_ff,
);

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
 * @param seed Seed to be used to generate random numbers.
 * @returns Pseudo-random number from seed.
 */
export const cryptoNumber = async (seed: Numeric | string) =>
	thenSha256ToNumber(crypto.subtle.digest("SHA-256", encode(`${seed}`)));
