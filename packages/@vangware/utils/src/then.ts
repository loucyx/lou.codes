import type { Unary } from "@vangware/types";

/**
 * Sets a promise `then` handler.
 *
 * @category Promises
 * @example
 * ```typescript
 * const thenJson = then((response: Response) => response.json());
 *
 * thenJson(fetch("/api")); // Parsed response
 * ```
 * @returns Curried function with `handler` set in context.
 */
export const then =
	<HandlerInput, Output>(
		handler: Unary<HandlerInput, Output | PromiseLike<Output>>,
	) =>
	<PromiseInstance extends Promise<HandlerInput>>(promise: PromiseInstance) =>
		promise.then(handler);
