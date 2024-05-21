import { captureType } from "./captureType.js";

/**
 * Matches a group before the main expression without including it in the\
 * result.
 *
 * @category Look around
 */
export const capturePrevious = captureType("<=");
