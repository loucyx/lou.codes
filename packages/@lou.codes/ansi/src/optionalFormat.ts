import { EMPTY_OBJECT, EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type { Maybe } from "@lou.codes/types";
import { format } from "./format.js";
import { normalizeString } from "./normalizeString.js";

const thunkedNormalizeString = () => normalizeString;

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
 * optionalFormat(42)(13)("Lou"); // "\u001B[42mLou\u001B[13m"
 * // In an environment without color:
 * optionalFormat(42)(13)("Lou"); // "Lou"
 * // It also works with tagged templates:
 * optionalFormat(42)(13)`Lou`; // "\u001B[42mLou\u001B[13m"
 * ```
 * @see {@link format}
 * @see {@link normalizeString}
 *
 * @param process NodeJS `globalThis.process`.
 * @returns Either the formatted string, or just the passed string.
 */
export const optionalFormat = (global =>
	(
		(global.process?.env.NODE_DISABLE_COLORS ?? EMPTY_STRING) ===
			EMPTY_STRING &&
		global.process?.env.NO_COLOR === undefined &&
		global.process?.env.TERM !== "dumb" &&
		((global.process?.env.FORCE_COLOR ?? "1") !== "0" ||
			(global.process?.stdout.isTTY ?? false))
	) ?
		format
	:	() => thunkedNormalizeString)(
	(globalThis as Maybe<Partial<typeof globalThis>>) ??
		(EMPTY_OBJECT as Partial<typeof globalThis>),
) as typeof format;
