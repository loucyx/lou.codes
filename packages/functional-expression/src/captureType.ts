import type { ReadOnlyArray, Strigifiable } from "@lou.codes/types";
import { capture } from "./capture.js";
import { join } from "./join.js";

/**
 * Helper for all groups that start with `?`.
 *
 * @category Groups & References
 */
export const captureType =
	<const Type extends Strigifiable>(type: Type) =>
	<const Captured extends ReadOnlyArray<Strigifiable>>(
		...captured: Captured
	) =>
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		capture(`?${type}${join(...captured)}`);
