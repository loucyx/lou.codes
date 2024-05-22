import type { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type {
	ReadOnlyArray,
	RegularExpressionFlags,
	Strigifiable,
	StringJoin,
} from "@lou.codes/types";
import { join } from "./join.js";

/**
 * Builds a `RegExp` with required `u` flag and strongly typed source (using
 * {@link join}).
 *
 * @category Util
 */
export const build =
	<Flags extends RegularExpressionFlags = "u">(flags: Flags | "u" = "u") =>
	<const Tokens extends ReadOnlyArray<Strigifiable>>(...tokens: Tokens) =>
		new RegExp(join(...tokens), flags) as RegExp & {
			readonly flags: Flags;
			readonly source: StringJoin<Tokens, typeof EMPTY_STRING>;
		};
