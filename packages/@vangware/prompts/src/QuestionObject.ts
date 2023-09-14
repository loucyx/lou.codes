import type { Awaitable } from "@vangware/types";

/**
 * Question object.
 *
 * @remarks
 * Small abstraction layer on top the `question` method of Node's `readline`
 * module.
 */
export type QuestionObject = {
	/**
	 * Question function.
	 *
	 * @param query Question to ask.
	 * @returns Promise with the answer.
	 */
	readonly question: (query: string) => Awaitable<string>;
};
