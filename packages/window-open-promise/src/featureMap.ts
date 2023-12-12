import { map } from "@lou.codes/iterables";
import type { EntryOf } from "@lou.codes/types";
import { always, identity, when, whenIsBoolean } from "@lou.codes/utils";
import type { WindowOpenPromiseFeatures } from "./WindowOpenPromiseFeatures.js";
import { FEATURE_DISABLED, FEATURE_ENABLED } from "./constants.js";

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
		`${feature.toLocaleLowerCase()}=${whenIsBoolean(
			when(Boolean)(always(FEATURE_ENABLED))(always(FEATURE_DISABLED)),
		)(identity as (value: number) => number)(value)}`,
);
