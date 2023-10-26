import type { Function, Single, Unary } from "@lou.codes/types";

/**
 * Event listener unary function.
 *
 * @template Data Data type.
 * @see [Unary](https://lou.codes/libraries/lou_codes_types/#unary)
 */
export type EventListener<Data> = Single<Data> extends Single<never>
	? Function<[], void>
	: Unary<Data, void>;
