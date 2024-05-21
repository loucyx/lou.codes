import { captureType } from "./captureType.js";

/**
 * Specifies a group that can not match before the main expression (if it
 * matches, the result is discarded).
 *
 * @category Look around
 */
export const notCapturePrevious = captureType("<!");
