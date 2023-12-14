import { map } from "@lou.codes/iterables";
import type { EntryOf } from "@lou.codes/types";
import type { WindowOpenPromiseFeatures } from "./WindowOpenPromiseFeatures.js";
import { featureValueMapper } from "./featureValueMapper.js";

/**
 * Maps array of feature entries to valid values.
 *
 * @example
 * ```typescript
 * featureMap([
 * 	["top", "10"],
 * 	["left", "10"],
 * 	["resizable", true]
 * ]); // ["top=10", "left=10", "resizable=1"]
 * ```
 * @returns Array of formatted features.
 */
export const featureMap = map(
	([feature, value = false]: EntryOf<WindowOpenPromiseFeatures>) =>
		`${feature.toLocaleLowerCase()}=${featureValueMapper(value)}`,
);
