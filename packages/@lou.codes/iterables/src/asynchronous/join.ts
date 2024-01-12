import { EMPTY_STRING } from "@lou.codes/constants";
import type { IsomorphicIterable, Maybe } from "@lou.codes/types";
import { awaitableHandler } from "@lou.codes/utils";
import { reduce } from "./reduce.js";

/**
 * Takes a `separator` string and a iterable or asynchronous iterable and
 * returns a string with the concatenation of all the elements separated by the
 * `separator`.
 *
 * @category Asynchronous Reducers
 * @example
 * ```typescript
 * const joinWithSpaces = join(" ");
 * joinWithSpaces([1, 2, 3]); // "1 2 3"
 * ```
 * @param separator String to use as separator.
 * @returns Curried function with `separator` in context.
 */
export const join =
	(separator: string) =>
	<Iterable extends IsomorphicIterable>(iterable: Iterable) =>
		awaitableHandler((string: Maybe<string>) => string ?? EMPTY_STRING)(
			reduce<string, Maybe<string>>(
				item => string =>
					`${string ?? EMPTY_STRING}${
						string === undefined ? EMPTY_STRING : separator
					}${item}`,
			)(undefined)(iterable as IsomorphicIterable<string>),
		) as Iterable extends AsyncIterable<unknown> ? Promise<string> : string;
