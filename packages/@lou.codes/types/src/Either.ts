/**
 * Value that can be something or something else.
 *
 * @category Common
 * @remarks
 * Union type useful for cases where a value might be of one type or another. By
 * convention we use `Right` for the "success" type and `Left` for the error.
 * @example
 * ```typescript
 * type MaybeNumber = Either<number, string>;
 * const maybeNumber: MaybeNumber = 1;
 * const notNumber: MaybeNumber = "1";
 * ```
 *
 * @template Right The "correct" type.
 * @template Left The "error" type.
 */
export type Either<Right, Left> = Right | Left;
