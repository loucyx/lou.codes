import type { Unary } from "@vangware/types";

/**
 * Delayed evaluation function.
 *
 * @category Functions
 * @example
 * ```typescript
 * const always = thunk(id);
 * const alwaysFoo = always("foo")
 * alwaysFoo(); // "foo"
 * ```
 * @returns Function that will run the given function when called.
 */
export const thunk =
	<Input, Output>(unary: Unary<Input, Output>) =>
	(input: Input) =>
		(() => unary(input)) as () => Output;
