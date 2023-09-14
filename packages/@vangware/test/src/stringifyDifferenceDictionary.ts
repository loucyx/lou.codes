import { foregroundRed } from "@vangware/ansi";
import { formatPropertyPath } from "./formatPropertyPath.js";
import { formatValue } from "./formatValue.js";
import { stringifyDifference } from "./stringifyDifference.js";
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
	// eslint-disable-next-line @typescript-eslint/naming-convention, id-length
	A: ({ index, item, path = [] }) =>
		stringifyDifference({
			...item,
			path: [...path, index],
		} as Difference),
	// eslint-disable-next-line @typescript-eslint/naming-convention, id-length
	D: ({ path = [] }) => `${formatPropertyPath(path)} is missing.`,
	// eslint-disable-next-line @typescript-eslint/naming-convention, id-length
	E: ({ path = [], rhs: received, lhs: wanted }) =>
		`${formatPropertyPath(path)} has the wrong value. Wanted ${formatValue(
			wanted,
		)} but received ${formatValue(received)}.`,
	// eslint-disable-next-line @typescript-eslint/naming-convention, id-length
	N: ({ path = [], rhs: received }) =>
		`${formatPropertyPath(path)} was set with value ${formatValue(
			received,
		)}.`,
	// eslint-disable-next-line @typescript-eslint/naming-convention, id-length
	X: ({ error }) =>
		foregroundRed`there was an uncaught error: ${
			error instanceof Error ? error.message : (error as string)
		}.`,
};
