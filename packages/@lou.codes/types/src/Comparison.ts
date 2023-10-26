import type { Filter } from "./Filter.js";
import type { Predicate } from "./Predicate.js";
import type { Single } from "./Single.js";
import type { Unary } from "./Unary.js";

/**
 * Comparison curried function.
 *
 * @category Function
 * @remarks
 * Curried function that takes a `Right` and a `Left` value and returns a
 * `boolean` representing a comparison between them.
 * @example
 * ```typescript
 * const biggerThan: Comparison<number> = right => left => right > left;
 * ```
 * @see {@link Predicate}
 * @see {@link Unary}
 *
 * @template Right Right-hand side of the comparison.
 * @template Left Left-hand side of the comparison.
 * @template Predicated Type of the value if `Predicate` returns `true`.
 * @param right Right-hand side of the comparison.
 * @returns {@link Predicate} with `right` set in context, which expects a
 * `left` value to return a `boolean` representing a comparison between them.
 */
export type Comparison<
	Right = unknown,
	Left extends Right = Right,
	Predicated extends Left = never,
> = Unary<
	Right,
	Single<Predicated> extends Single<never>
		? Filter<Left>
		: Predicate<Left, Predicated>
>;
