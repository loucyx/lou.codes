import type { Awaitable } from "@lou.codes/types";

export type Test<Value = unknown> = {
	/** Given description. */
	readonly given: string;

	/** Must description. */
	readonly must: string;

	/** Received value. */
	readonly received: () => Awaitable<Value>;

	/** Wanted value. */
	readonly wanted: () => Awaitable<Value>;
};
