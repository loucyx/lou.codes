import { foregroundBrightRed, underlined } from "@lou.codes/ansi";
import type { ReadOnlyArray } from "@lou.codes/types";
import type { ReadOnlyURL } from "../src/ReadOnlyURL.js";
import type { Tests } from "../src/Tests.js";
import { relativePath } from "../src/bin/relativePath.js";
import { runAndStringifyTests } from "../src/bin/runAndStringifyTests.js";
import { FAILED_TESTS, TEST } from "../src/constants.js";
import { fail, iterableToArray, pass } from "./utils.js";

const filenameA: ReadOnlyURL = new URL("file:///example/test-a.js");
const filenameB: ReadOnlyURL = new URL("file:///example/test-b.js");

const genericPass = pass({ given: `🟢`, must: `🟩` });
const genericFail = fail({
	errors: [
		`it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
	],
	given: `🟢`,
	must: `🟩`,
});

export const runAndStringifyTestsTests = [
	{
		given: "a passing test",
		must: "return correct string",
		received: () =>
			iterableToArray(
				runAndStringifyTests([
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "🟩",
							wanted: () => "🟩",
						},
					],
				]),
			),
		wanted: () => [
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericPass,
		],
	},
	{
		given: "a failing test",
		must: "return correct string",
		received: () =>
			iterableToArray(
				runAndStringifyTests([
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "❌",
							wanted: () => "🟩",
						},
					],
				]),
			),
		wanted: () => [
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericFail,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericFail,
		],
	},
	{
		given: "a failing and a passing test in different files",
		must: "return correct string",
		received: () =>
			iterableToArray(
				runAndStringifyTests([
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "❌",
							wanted: () => "🟩",
						},
					],
					[
						filenameB,
						{
							given: "🟢",
							must: "🟩",
							received: () => "🟩",
							wanted: () => "🟩",
						},
					],
				]),
			),
		wanted: () => [
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericFail,
			`${TEST} ${underlined(relativePath(filenameB))}`,
			genericPass,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericFail,
		],
	},
	{
		given: "a failing and a passing test in the same file",
		must: "return correct string",
		received: () =>
			iterableToArray(
				runAndStringifyTests([
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "❌",
							wanted: () => "🟩",
						},
					],
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "🟩",
							wanted: () => "🟩",
						},
					],
				]),
			),
		wanted: () => [
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericFail,
			genericPass,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericFail,
		],
	},
	{
		given: "a passing and a failing test in different files",
		must: "return correct string",
		received: () =>
			iterableToArray(
				runAndStringifyTests([
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "🟩",
							wanted: () => "🟩",
						},
					],
					[
						filenameB,
						{
							given: "🟢",
							must: "🟩",
							received: () => "❌",
							wanted: () => "🟩",
						},
					],
				]),
			),
		wanted: () => [
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericPass,
			`${TEST} ${underlined(relativePath(filenameB))}`,
			genericFail,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameB))}`,
			genericFail,
		],
	},
	{
		given: "a passing and a failing test in the same file",
		must: "return correct string",
		received: () =>
			iterableToArray(
				runAndStringifyTests([
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "🟩",
							wanted: () => "🟩",
						},
					],
					[
						filenameA,
						{
							given: "🟢",
							must: "🟩",
							received: () => "❌",
							wanted: () => "🟩",
						},
					],
				]),
			),
		wanted: () => [
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericPass,
			genericFail,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			genericFail,
		],
	},
	{
		given: "an empty set of tests",
		must: "return an empty string",
		received: () => iterableToArray(runAndStringifyTests([])),
		wanted: () => [],
	},
] satisfies Tests<ReadOnlyArray<string>>;
