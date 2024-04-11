import type { Single, Unary } from "@lou.codes/types";

/**
 * Emitter function (when data is `never` it doesn't take any arguments).
 *
 * @template Data Data type.
 */
export type Emitter<Data> =
	// eslint-disable-next-line functional/no-return-void
	Single<Data> extends Single<never> ? () => void : Unary<Data, void>;
