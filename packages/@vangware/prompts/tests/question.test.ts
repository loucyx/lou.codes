import type { Tests } from "@vangware/test";
import { question } from "../src/question.js";

const testQuestion = question({
	question: (response: string) => Promise.resolve(response.trim()),
});

const testQuestionNoPromise = question({
	question: (response: string) => response.trim(),
});

const testQuestionRetry = question(
	(() => {
		// eslint-disable-next-line functional/no-let
		let tries = 0;

		return {
			// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
			question: (response: string) =>
				Promise.resolve(
					// eslint-disable-next-line functional/immutable-data, no-plusplus
					tries++ < 1 ? response.trim() : "ok",
				),
		};
	})(),
);

export default [
	{
		given: "a plain question with a mock readline interface",
		must: "get the answer back",
		received: () =>
			testQuestion({
				query: "Vangware",
			}),
		wanted: () => "Vangware",
	},
	{
		given: "a plain question with a mock readline interface that returns a string without a promise",
		must: "get the answer back",
		received: () =>
			testQuestionNoPromise({
				query: "Vangware",
			}),
		wanted: () => "Vangware",
	},
	{
		given: "a question with a passing validation and a mock readline interface",
		must: "get the answer back",
		received: () =>
			testQuestion({
				query: "Vangware",
				validate: () => "",
			}),
		wanted: () => "Vangware",
	},
	{
		given: "a question with a failing validation and a mock readline interface",
		must: "get the error back",
		received: () =>
			testQuestion({
				query: "Vangware",
				validate: () => "Error",
			}).catch((error: string) => error),
		wanted: () => "Error",
	},
	{
		given: "a question with formatting and a mock readline interface",
		must: "get the answer back",
		received: () =>
			testQuestion({
				format: value => value.toLocaleUpperCase("en-US"),
				query: "Vangware",
			}),
		wanted: () => "VANGWARE",
	},
	{
		given: "a question with formatting, a passing validation and a mock readline interface",
		must: "get the answer back",
		received: () =>
			testQuestion({
				format: value => value.toLocaleUpperCase("en-US"),
				query: "Vangware",
				validate: () => "",
			}),
		wanted: () => "VANGWARE",
	},
	{
		given: "a question with formatting, a failing validation and a mock readline interface",
		must: "get the answer back",
		received: () =>
			testQuestion({
				format: value => value.toLocaleUpperCase("en-US"),
				query: "Vangware",
				validate: value => `Error ${value}`,
			}).catch((error: string) => error),
		wanted: () => "Error VANGWARE",
	},
	{
		given: "a question with formatting, a failing validation, a retry and a mock readline interface",
		must: "get the answer back",
		received: () =>
			testQuestionRetry({
				format: value => value.toLocaleUpperCase("en-US"),
				query: "not ok",
				retry: true,
				validate: value => (value !== "OK" ? `Error ${value}` : ""),
			}),
		wanted: () => "OK",
	},
] satisfies Tests<string>;
