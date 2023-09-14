import { objectToEntries } from "@vangware/iterables";
import { featureJoin } from "./featureJoin.js";
import { featureMap } from "./featureMap.js";
import type { WindowOpenPromiseFeatures } from "./WindowOpenPromiseFeatures.js";

/**
 * Parses features object into features string.
 *
 * @example
 * ```typescript
 * featureParser({
 * 	top: 10,
 * 	left: 10,
 * 	resizable: true
 * }); // "top=10,left=10,resizable=1"
 * ```
 * @param features Features object.
 * @returns Parsed string.
 */
export const featureParser = (features: WindowOpenPromiseFeatures = {}) =>
	featureJoin(
		featureMap(
			objectToEntries(features as Required<WindowOpenPromiseFeatures>),
		),
	);
