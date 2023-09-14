import type { Filter, Predicate, Single, Unary } from "@vangware/types";
import { flip } from "./flip.js";
import { identity } from "./identity.js";
import { when } from "./when.js";

/**
 * Like `when`, but when is falsy the value is returned as is.
 *
 * @category Conditions
 * @example
 * ```typescript
 * const isEven = (value: number) => value % 2 === 0;
 * const whenIsEven = whenTruthy(isEven);
 * const double = (value: number) => value * 2;
 * const doubleWhenEven = whenIsEven(double);
 *
 * doubleWhenEven(2); // 4
 * doubleWhenEven(3); // 3
 * ```
 * @param predicate Predicate to check value against.
 * @returns Curried function with `predicate` in context.
 */
export const whenTruthy = <Value, Predicated extends Value = never>(
	predicate: Single<Predicated> extends Single<never>
		? Filter<Value>
		: Predicate<Value, Predicated>,
) =>
	flip(when(predicate))(identity) as <Output>(
		truthyHandler: Unary<Predicated & Value, Output>,
	) => (value: Value) => Output | Value;
