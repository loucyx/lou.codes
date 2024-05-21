import { captureType } from "./captureType.js";

/**
 * Specifies a group that can not match after the main expression (if it
 * matches, the result is discarded).
 *
 * @category Look around
 */
export const notCaptureNext = captureType("!");
