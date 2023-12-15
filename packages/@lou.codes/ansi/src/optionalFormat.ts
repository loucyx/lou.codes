import { EMPTY_OBJECT } from "@lou.codes/constants";
import { EMPTY_STRING } from "@lou.codes/constants/EMPTY_STRING.js";
import type { Maybe } from "@lou.codes/types";
import { format } from "./format.js";
import { normalizeString } from "./normalizeString.js";

/**
 * Process dependant `format` function.
 *
 * @category Common
 * @remarks
 * Impure version of {@link format} which changes depending on the current
 * NodeJS `globalThis.process` environment.
 * @example
 * ```typescript
 * // In a environment with color:
 * optionalFormat(42)(13)("Lou"); // "\x1b[42mLou\x1b[13m"
 * // In an environment without color:
 * optionalFormat(42)(13)("Lou"); // "Lou"
 * // It also works with tagged templates:
 * optionalFormat(42)(13)`Lou`; // "\x1b[42mLou\x1b[13m"
 * ```
 * @see {@link format}
 * @see {@link normalizeString}
 *
 * @param process NodeJS `globalThis.process`.
 * @returns Either the formatted string, or just the passed string.
 */
export const optionalFormat = (({
	process: {
		env = EMPTY_OBJECT as Partial<(typeof globalThis)["process"]["env"]>,
		stdout = { isTTY: false },
	} = EMPTY_OBJECT as Partial<(typeof globalThis)["process"]>,
}) =>
	(
		(env.NODE_DISABLE_COLORS ?? EMPTY_STRING) === EMPTY_STRING &&
		env.NO_COLOR === undefined &&
		env.TERM !== "dumb" &&
		((env.FORCE_COLOR ?? "1") !== "0" || stdout.isTTY)
	) ?
		format
	:	() => () => normalizeString)(
	(globalThis as Maybe<Partial<typeof globalThis>>) ??
		(EMPTY_OBJECT as Partial<typeof globalThis>),
) as typeof format;
