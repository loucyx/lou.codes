import type { Strigifiable } from "@lou.codes/types";
import { captureType } from "./captureType.js";

/**
 * Creates a capturing group that can be referenced via the specified name.
 *
 * @category Groups & References
 */
export const captureNamed = <const Name extends Strigifiable>(name: Name) =>
	captureType(`<${name}>`);
