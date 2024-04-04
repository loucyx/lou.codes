import type { Unary } from "@lou.codes/types";
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
) => {
	/**
	 * @see [Promise#then](https://mdn.io/Promise#then)
	 */
	then: <ResolvedValue = Value, RejectedValue = unknown>(
		// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
		this: void,
		onResolved?: Unary<Value, ResolvedValue | PromiseLike<ResolvedValue>>,
		onRejected?: Unary<unknown, RejectedValue | PromiseLike<RejectedValue>>,
	) => Promise<ResolvedValue | RejectedValue>;

	/**
	 * @see [Promise#then](https://mdn.io/Promise#catch)
	 */
	catch: <RejectedValue = unknown>(
		// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
		this: void,
		onrejected?: Unary<unknown, RejectedValue | PromiseLike<RejectedValue>>,
	) => Promise<Value | RejectedValue>;
};
