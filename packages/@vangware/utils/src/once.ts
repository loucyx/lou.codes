import type { Unary, UnaryInput, UnaryOutput } from "@vangware/types";
import { get } from "./get.js";
import { mutate } from "./mutate.js";
import { thunk } from "./thunk.js";
import { when } from "./when.js";

const CALLED = Symbol("called");
const RESULT = Symbol("result");
const getCalled = thunk(get(CALLED));
const getResult = thunk(get(RESULT));

/**
 * Runs a function once, and after that returns always the same value.
 *
 * @category Functions
 * @example
 * ```typescript
 * const expensiveOperation = (value: number) => value * 2;
 * const onceOperation = once(expensiveOperation);
 *
 * onceOperation(2); // 4
 * onceOperation(3); // 4 (cached)
 * ```
 * @param unary Function to run once.
 * @returns Curried function with `unary` in context.
 */
export const once = <OnceFunction extends Unary<never, unknown>>(
	unary: OnceFunction,
) =>
	(state =>
		when<UnaryInput<OnceFunction>>(getCalled(state))(getResult(state))(
			input =>
				mutate({
					[CALLED]: true,
					[RESULT]: unary(
						input as never,
					) as UnaryOutput<OnceFunction>,
				})(state)[RESULT],
		))({
		/** When the function was called. */
		[CALLED]: false,
		/** Result of the first call. */
		[RESULT]: undefined as UnaryOutput<OnceFunction>,
	});
