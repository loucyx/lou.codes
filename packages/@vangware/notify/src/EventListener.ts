import type { Function, Single, Unary } from "@vangware/types";

/**
 * Event listener unary function.
 *
 * @template Data Data type.
 * @see [Unary](https://vangware.com/libraries/vangware_types/#unary)
 */
export type EventListener<Data> = Single<Data> extends Single<never>
	? Function<[], void>
	: Unary<Data, void>;
