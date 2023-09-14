import type { ReadOnly, ReadOnlyArray } from "@vangware/types";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { getFilePaths } from "../src/getFilePaths.js";
import type { ReadOnlyURL } from "../src/types/ReadOnlyURL.js";
import type { Tests } from "../src/types/Tests.js";
import { iterableToArray } from "./utils.js";

const currentDirectoryURLResolve = (...paths: ReadonlyArray<string>) =>
	pathToFileURL(resolve(fileURLToPath(import.meta.url), ...paths));

export default [
	{
		given: "a valid directory path",
		must: "return an array with the files on it",
		received: () =>
			iterableToArray(
				getFilePaths(currentDirectoryURLResolve("../directory")),
			),
		wanted: () => [
			currentDirectoryURLResolve("../directory/inDirectory.test.ts"),
		],
	},
	{
		given: "a valid file path",
		must: "return an array with that file on it",
		received: () =>
			iterableToArray(
				getFilePaths(
					currentDirectoryURLResolve(
						"../directory/inDirectory.test.ts",
					),
				),
			),
		wanted: () => [
			currentDirectoryURLResolve("../directory/inDirectory.test.ts"),
		],
	},
	{
		given: "an invalid directory path",
		must: "reject the promise",
		received: () =>
			iterableToArray(
				getFilePaths(currentDirectoryURLResolve("../nope")),
			).catch((error: ReadOnly<Error>) => error.message),
		wanted: () =>
			`ENOENT: no such file or directory, stat '${currentDirectoryURLResolve(
				"../nope",
			)
				.toString()
				.replace("file://", "")}'`,
	},
] satisfies Tests<ReadOnlyArray<ReadOnlyURL> | string>;
