import type { Single, Unary } from "@lou.codes/types";

/**
 * Event listener unary function.
 *
 * @template Data Data type.
 * @see [Unary](https://lou.codes/libraries/lou_codes_types/#unary)
 */
export type EventListener<Data> =
	// eslint-disable-next-line functional/no-return-void
	Single<Data> extends Single<never> ? () => void : Unary<Data, void>;
