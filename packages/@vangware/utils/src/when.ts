import type { Filter, Predicate, Single, Unary } from "@vangware/types";

/**
 * Curried conditional (like a functional ternary).
 *
 * @category Conditions
 * @example
 * ```typescript
 * const isEven = (value: number) => value % 2 === 0;
 * const whenIsEven = when(isEven);
 * const double = (value: number) => value * 2;
 * const doubleWhenEven = whenIsEven(double);
 * const triple = (value: number) => value * 3;
 * const tripleWhenOdd = whenIsEven(triple);
 *
 * tripleWhenOdd(2); // 4
 * tripleWhenOdd(3); // 9
 * ```
 * @param predicate Predicate to check value against.
 * @returns Curried function with `predicate` in context.
 */
export const when =
	<Value, Predicated extends Value = never>(
		predicate: Single<Predicated> extends Single<never>
			? Filter<Value>
			: Predicate<Value, Predicated>,
	) =>
	<TrueOutput>(truthyHandler: Unary<Predicated & Value, TrueOutput>) =>
	<
		FalseInput = Value extends Predicated ? Value : Predicated,
		FalseOutput = TrueOutput,
	>(
		falsyHandler: Unary<FalseInput, FalseOutput>,
	) =>
	(value: Value) =>
		predicate(value)
			? truthyHandler(value as Predicated)
			: falsyHandler(value as FalseInput & Value);
