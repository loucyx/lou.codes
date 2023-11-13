import type { Function, Single, Unary } from "@lou.codes/types";

/**
 * Emitter function (when data is `never` it doesn't take any arguments).
 *
 * @template Data Data type.
 */
export type Emitter<Data> =
	Single<Data> extends Single<never> ? Function<[], void> : Unary<Data, void>;
