import type { Function, Maybe, ReadOnlyArray } from "@vangware/types";

/**
 * Wrapper for `try`/`catch`.
 *
 * @category Common
 * @remarks
 * This functions tries to run a function and silences the `throw`s by wrapping
 * it with a `try/catch` and returning `undefined` instead.
 * @example
 * ```typescript
 * const willFail = () => {
 * 	throw new Error("fail");
 * };
 *
 * const safeWillFail = attempt(willFail);
 * safeWillFail(); // undefined
 * ```
 *
 * @template Arguments Type of the arguments of the function to be wrapped.
 * @param wrappedFunction Function to be wrapped.
 * @returns Function wrapped in `try`/`catch`.
 */
export const attempt =
	<Arguments extends ReadOnlyArray, Output>(
		wrappedFunction: Function<Arguments, Output>,
	) =>
	(...parameters: Arguments): Maybe<Output> => {
		// eslint-disable-next-line functional/no-try-statements
		try {
			return wrappedFunction(...parameters);
		} catch {
			return undefined;
		}
	};
