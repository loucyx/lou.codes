import type { Function, Single, Unary } from "@vangware/types";

/**
 * Emitter function (when data is `never` it doesn't take any arguments).
 */
export type Emitter<Data> = Single<Data> extends Single<never>
	? Function<[], void>
	: Unary<Data, void>;
