import { map } from "@vangware/iterables";
import { isBoolean } from "@vangware/predicates";
import type { EntryOf } from "@vangware/types";
import { FEATURE_DISABLED, FEATURE_ENABLED } from "./constants.js";
import type { WindowOpenPromiseFeatures } from "./WindowOpenPromiseFeatures.js";

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
		`${feature.toLocaleLowerCase()}=${
			isBoolean(value)
				? value
					? FEATURE_ENABLED
					: FEATURE_DISABLED
				: value
		}`,
);
