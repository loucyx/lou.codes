import { join } from "@vangware/iterables";
import { FEATURE_SEPARATOR } from "./constants.js";

/**
 * Joins given array of features with the FEATURE_SEPARATOR.
 *
 * @example
 * ```typescript
 * featureJoin(["top=10", "left=10", "resizable=1"]); // "top=10,left=10,resizable=1"
 * ```
 * @returns Joint string.
 */
export const featureJoin = join(FEATURE_SEPARATOR);
