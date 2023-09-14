import { cwd } from "node:process";
import { pathToFileURL } from "node:url";
import { relativePath } from "../src/relativePath.js";
import type { Tests } from "../src/types/Tests.js";

const currentWorkingDirectory = pathToFileURL(cwd());
const filename = "vangware.test.ts";

export default [
	{
		given: "a relative path to CWD",
		must: "return path without CWD",
		received: () =>
			relativePath(
				new URL(`${currentWorkingDirectory.toString()}/${filename}`),
			),
		wanted: () => `./${filename}`,
	},
	{
		given: "a absolute path",
		must: "return full path",
		received: () => relativePath(new URL(`file:///${filename}`)),
		wanted: () => `file:///${filename}`,
	},
] satisfies Tests<string>;
