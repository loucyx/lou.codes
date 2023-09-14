import type { Unary, UnaryOutput } from "@vangware/types";

/**
 * Flips arguments of a curried function.
 *
 * @category Functions
 * @example
 * ```typescript
 * const concat = (first: string) => (second: string) => `${first}${second}`;
 * const flippedConcat = flip(concat);
 *
 * flippedConcat("1")("2"); // "21"
 * ```
 * @returns Curried function with `unary` in context.
 */
export const flip =
	<UnaryToFlip extends Unary<never, Unary<never, unknown>>>(
		unary: UnaryToFlip,
	) =>
	(...secondArgument: Parameters<UnaryOutput<UnaryToFlip>>) =>
	(...firstArgument: Parameters<UnaryToFlip>) =>
		(
			unary as (
				...firstArguments: typeof firstArgument
			) => (
				...secondArguments: typeof secondArgument
			) => UnaryOutput<UnaryOutput<UnaryToFlip>>
		)(...firstArgument)(...secondArgument);
