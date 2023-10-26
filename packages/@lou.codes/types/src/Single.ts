/**
 * Tuple of length 1 (AKA Monuple).
 *
 * @category Common
 * @remarks
 * Tuple with a single element on it, useful when doing optional types that
 * compare to `never`.
 * @example
 * ```typescript
 * const single: Single<boolean> = [true];
 * ```
 *
 * @template Type Type of the single element.
 */
export type Single<Type> = readonly [single: Type];
