import { construct } from "./construct.js";

/**
 * Functional alias for `new Promise()`.
 *
 * @category Classes
 */
export const constructPromise = construct(Promise) as <Value>(
	executor: (
		// eslint-disable-next-line functional/no-return-void
		resolve: (value: Value) => void,
		// eslint-disable-next-line functional/no-return-void
		reject: (reason?: unknown) => void,
		// eslint-disable-next-line functional/no-return-void
	) => void,
) => Promise<Value>;
