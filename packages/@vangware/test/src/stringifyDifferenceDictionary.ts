import { foregroundRed } from "@vangware/ansi";
import { CREATE, DELETE, UPDATE } from "@vangware/diff";
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
	[CREATE]: ({ path = [], right: received }) =>
		`${formatPropertyPath(path)} was set with value ${formatValue(
			received,
		)}.`,
	[DELETE]: ({ path = [] }) => `${formatPropertyPath(path)} is missing.`,
	[EXCEPTION]: ({ error }) =>
		foregroundRed`there was an uncaught error: ${
			error instanceof Error ? error.message : (error as string)
		}.`,
	[UPDATE]: ({ path = [], right: received, left: wanted }) =>
		`${formatPropertyPath(path)} has the wrong value. Wanted ${formatValue(
			wanted,
		)} but received ${formatValue(received)}.`,
};
