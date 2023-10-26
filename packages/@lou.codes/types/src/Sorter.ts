import type { Unary } from "./Unary.js";

/**
 * Curried sorter {@link Unary} function.
 *
 * @category Array
 * @category Function
 * @remarks
 * Type to represent a function that takes two items and returns a number to
 * determine their order. If the result is negative, the first item is sorted
 * before the second item. If the result is positive, the first item is sorted
 * after the second item. If the result is zero, the order of the items is
 * unchanged.
 * @example
 * ```typescript
 * const sorter: Sorter<number> = value1 => value2 => value1 - value2;
 * ```
 * @see {@link Unary}
 * @see [Array.prototype.sort](https://mdn.io/Array.prototype.sort)
 *
 * @template Item Type of the items to sort.
 */
export type Sorter<Item> = Unary<Item, Unary<Item, number>>;
