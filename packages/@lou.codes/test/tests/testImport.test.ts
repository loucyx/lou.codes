import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { Test } from "../src/Test.js";
import type { Tests } from "../src/Tests.js";
import { importTest } from "../src/importTest.js";

const relativeTestImport = (file: string) => async () => {
	const importedTest = importTest(
		pathToFileURL(resolve(import.meta.dirname, "./testImport", file)),
	);
	const output: Array<Test> = [];

	// eslint-disable-next-line functional/no-loop-statements
	for await (const nothing of importedTest) {
		// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
		output.push(nothing);
	}

	return output.length;
};

export const testTests = [
	{
		given: "a file that exports a string",
		must: "do nothing",
		received: relativeTestImport("string.ts"),
		wanted: () => 0,
	},
	{
		given: "a file that exports an object that isn't a test",
		must: "do nothing",
		received: relativeTestImport("object.ts"),
		wanted: () => 0,
	},
	{
		given: "a file that exports an  iterator",
		must: "do nothing",
		received: relativeTestImport("iterator.ts"),
		wanted: () => 0,
	},
	{
		given: "a file that exports an async iterator",
		must: "do nothing",
		received: relativeTestImport("asyncIterator.ts"),
		wanted: () => 0,
	},
	{
		given: "an empty file",
		must: "do nothing",
		received: relativeTestImport("empty.ts"),
		wanted: () => 0,
	},
	{
		given: "a file with a single test",
		must: "return said test",
		received: relativeTestImport("test.ts"),
		wanted: () => 1,
	},
] satisfies Tests;
