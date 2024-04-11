import { cwd } from "node:process";
import { pathToFileURL } from "node:url";
import type { Tests } from "../src/Tests.js";
import { relativePath } from "../src/bin/relativePath.js";

const currentWorkingDirectory = pathToFileURL(cwd());
const filename = "lou.test.ts";

export const relativePathTests = [
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
