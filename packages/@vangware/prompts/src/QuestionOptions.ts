import type { Maybe, Unary } from "@vangware/types";

/**
 * Options object for the `question` function.
 */
// eslint-disable-next-line functional/no-mixed-types
export type QuestionOptions<FormattedValue = string> = {
	/**
	 * Function to format the question's answer given by the user.
	 *
	 * @example
	 * ```typescript
	 * {
	 * 	format: value => parseInt(value, 18),
	 * }
	 * ```
	 * @param input The question's answer given by the user.
	 * @returns Formatted value.
	 */
	readonly format?: Unary<string, FormattedValue>;

	/**
	 * Query to show to the user.
	 */
	readonly query: string;

	/**
	 * Whether to retry the question if the answer is invalid.
	 */
	readonly retry?: boolean;

	/**
	 * Function to validate the question's answer given by the user (after formatting).
	 * Returning an string will be used to reject with an error, while an empty
	 * string or undefined is considered valid.
	 *
	 * @example
	 * ```typescript
	 * {
	 * 	validate: value => value % 2 === 0,
	 * }
	 * ```
	 * @param input The question's answer given by the user.
	 * @returns Either an error, an empty string or undefined.
	 */
	readonly validate?: Unary<FormattedValue, Maybe<string>>;
};
