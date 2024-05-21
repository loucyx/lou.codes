import { captureType } from "./captureType.js";

/**
 * Groups multiple tokens together without creating a capture group.
 *
 * @category Groups & References
 */
export const group = captureType(":");
