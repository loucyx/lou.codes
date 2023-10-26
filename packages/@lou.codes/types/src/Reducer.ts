import type { Unary } from "./Unary.js";

/**
 * Reducer/Folder function.
 *
 * @category Array
 * @category Function
 * @remarks
 * Type to represent a folder/reducer unary function that takes an item and an
 * accumulator something of the type of the accumulator.
 * @example
 * ```typescript
 * const reducer: Reducer<number, number> = item => accumulator => accumulator + item;
 * ```
 * @see {@link Unary}
 *
 * @template Item Type of the items to reduce.
 * @template Accumulator Type of the accumulator/output.
 */
export type Reducer<Item, Accumulator> = Unary<
	Item,
	Unary<Accumulator, Accumulator>
>;
