import type { ReadOnlyArray, Strigifiable } from "@lou.codes/types";
import { join } from "./join.js";

/**
 * Groups multiple tokens together and creates a capture group for extracting a
 * substring or using a backreference.
 *
 * @category Groups & References
 */
export const capture = <const Captured extends ReadOnlyArray<Strigifiable>>(
	...captured: Captured
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
) => `(${join(...captured)})` as const;
