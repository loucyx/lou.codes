import { EMPTY_STRING } from "@lou.codes/constants";
import type { QuestionObject } from "./QuestionObject.js";
import type { QuestionOptions } from "./QuestionOptions.js";

/**
 * Interactive question.
 *
 * @remarks
 * Small abstraction layer on top the `question` method of Node's `readline`
 * module.
 * @example
 * ```typescript
 * import { createInterface } from "node:readline/promises";
 *
 * const exampleQuestion = question(createInterface({
 * 	input: process.stdin,
 * 	output: process.stdout,
 * }));
 *
 * exampleQuestion({
 * 	format: value => parseInt(value, 18),
 * 	query: "How old are you?",
 * 	validate: value => (value < 18 ? "You must be at least 18 years old." : ""),
 * }).then(console.log).catch(console.error);
 * ```
 * @see {@link QuestionObject}
 * @see {@link QuestionOptions}
 *
 * @param questionObject Object with a question function that returns a promise.
 * @returns Curried function with `questionObject` set in context.
 */
export const question =
	(questionObject: QuestionObject) =>
	/**
	 * Interactive question with `questionObject` set in context.
	 *
	 * @see {@link question}
	 *
	 * @template FormattedValue Result of the value after formatting.
	 * @param options Options object for the question.
	 * @returns Promise with the question's answer.
	 */
	async <FormattedValue = string>(
		options: QuestionOptions<FormattedValue>,
	): Promise<FormattedValue> => {
		const value = await questionObject.question(`${options.query} `);
		const formattedValue = (
			options.format === undefined ?
				value
			:	options.format(value)) as FormattedValue;
		const validationError =
			options.validate?.(formattedValue) ?? EMPTY_STRING;

		return (
			validationError ?
				options.retry ?? false ?
					question(questionObject)({
						...options,
						query: validationError,
					})
				:	Promise.reject(validationError)
			:	formattedValue
		);
	};
