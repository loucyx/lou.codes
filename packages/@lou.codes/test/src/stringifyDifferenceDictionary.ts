import { foregroundRed } from "@lou.codes/ansi";
import { EMPTY_ARRAY } from "@lou.codes/constants";
import { CREATE, DELETE, UPDATE } from "@lou.codes/diff";
import { EXCEPTION } from "./constants.js";
import { formatPropertyPath } from "./formatPropertyPath.js";
import { formatValue } from "./formatValue.js";
import type { Difference } from "./types/Difference.js";

/**
 * Dictionary `Difference` kind->formatter.
 *
 * @category Output
 */
export const stringifyDifferenceDictionary: {
	readonly [Kind in Difference["kind"]]: (
		difference: Difference & { readonly kind: Kind },
	) => string;
} = {
	[CREATE]: ({ path = EMPTY_ARRAY, right: received }) =>
		`${formatPropertyPath(path)} was set with value ${formatValue(
			received,
		)}.`,
	[DELETE]: ({ path = EMPTY_ARRAY }) =>
		`${formatPropertyPath(path)} is missing.`,
	[EXCEPTION]: ({ error }) =>
		foregroundRed`there was an uncaught error: ${
			error instanceof Error ? error.message : (error as string)
		}.`,
	[UPDATE]: ({ path = EMPTY_ARRAY, right: received, left: wanted }) =>
		`${formatPropertyPath(path)} has the wrong value. Wanted ${formatValue(
			wanted,
		)} but received ${formatValue(received)}.`,
};
