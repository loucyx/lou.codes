import type { Maybe } from "@vangware/types";
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
 * optionalFormat(42)(13)("Vangware"); // "\x1b[42mVangware\x1b[13m"
 * // In an environment without color:
 * optionalFormat(42)(13)("Vangware"); // "Vangware"
 * // It also works with tagged templates:
 * optionalFormat(42)(13)`Vangware`; // "\x1b[42mVangware\x1b[13m"
 * ```
 * @see {@link format}
 * @see {@link normalizeString}
 *
 * @param process NodeJS `globalThis.process`.
 * @returns Either the formatted string, or just the passed string.
 */
export const optionalFormat = (({ process: { env = {}, stdout = {} } = {} }) =>
	(env.NODE_DISABLE_COLORS ?? "") === "" &&
	env.NO_COLOR === undefined &&
	env.TERM !== "dumb" &&
	((env.FORCE_COLOR ?? "1") !== "0" || (stdout.isTTY ?? false))
		? format
		: () => () => normalizeString)(
	(globalThis as Maybe<Partial<typeof globalThis>>) ?? {},
) as typeof format;
