import { captureType } from "./captureType.js";

/**
 * Matches a group after the main expression without including it in the result.
 *
 * @category Look around
 */
export const captureNext = captureType("=");
