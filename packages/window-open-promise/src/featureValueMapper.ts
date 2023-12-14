import { always, identity, when, whenIsBoolean } from "@lou.codes/utils";
import { FEATURE_DISABLED, FEATURE_ENABLED } from "./constants.js";

/**
 * Takes a feature value and returns a formatted feature value.
 *
 * @example
 * ```typescript
 * featureValueMapper(true); // 1
 * featureValueMapper(false); // 0
 * featureValueMapper(13); // 13
 * ```
 * @returns Feature value.
 */
export const featureValueMapper = whenIsBoolean(
	when(Boolean)(always(FEATURE_ENABLED))(always(FEATURE_DISABLED)),
)(identity as (value: number) => number);
