import type { CREATE, DELETE, UPDATE } from "./constants.js";

/**
 * Kinds of differences (create, delete or update).
 *
 * @category Difference
 * @example
 * ```typescript
 * const create: DifferenceKind = 1;
 * const delete: DifferenceKind = 2;
 * const update: DifferenceKind = 4;
 * ```
 */
export type DifferenceKind = typeof CREATE | typeof DELETE | typeof UPDATE;
