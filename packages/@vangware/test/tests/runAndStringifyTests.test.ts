import { bold, foregroundBrightRed, underlined } from "@vangware/ansi";
import type { ReadOnlyArray } from "@vangware/types";
import { FAIL, FAILED_TESTS, PASS, TEST } from "../src/constants.js";
import { relativePath } from "../src/relativePath.js";
import { runAndStringifyTests } from "../src/runAndStringifyTests.js";
import type { ReadOnlyURL } from "../src/types/ReadOnlyURL.js";
import type { Tests } from "../src/types/Tests.js";
import { iterableToArray } from "./utils.js";

const filenameA: ReadOnlyURL = new URL("file:///example/test-a.js");
const filenameB: ReadOnlyURL = new URL("file:///example/test-b.js");

export default [
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
			`${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.`,
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
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
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
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
			`${TEST} ${underlined(relativePath(filenameB))}`,
			`${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.`,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
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
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
			`${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.`,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
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
			`${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.`,
			`${TEST} ${underlined(relativePath(filenameB))}`,
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameB))}`,
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
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
			`${PASS} Given ${bold`🟢`}, must ${bold`🟩`}.`,
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
			FAILED_TESTS,
			`${TEST} ${underlined(relativePath(filenameA))}`,
			`${FAIL} Given ${bold`🟢`}, must ${bold`🟩`}, but...\n\t└ it has the wrong value. Wanted ${foregroundBrightRed`"🟩"`} but received ${foregroundBrightRed`"❌"`}.`,
		],
	},
	{
		given: "an empty set of tests",
		must: "return an empty string",
		received: () => iterableToArray(runAndStringifyTests([])),
		wanted: () => [],
	},
] satisfies Tests<ReadOnlyArray<string>>;
