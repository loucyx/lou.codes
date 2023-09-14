import { cwd } from "node:process";
import { pathToFileURL } from "node:url";
import type { ReadOnlyURL } from "./types/ReadOnlyURL.js";

/** Cached CWD URL's href. */
const { href: currentWorkingDirectory } = pathToFileURL(cwd());

/**
 * Given a path, replace the CWD with a `"."` to make it relative.
 *
 * @category Output
 * @example
 * ```typescript
 * // If CWD is `"/projects"`
 * relativePath("/projects/tests/"); // "./tests/"
 * ```
 * @param path Path to make relative.
 * @returns Relative path.
 */
export const relativePath = ({ href }: ReadOnlyURL) =>
	href.replace(currentWorkingDirectory, ".");
