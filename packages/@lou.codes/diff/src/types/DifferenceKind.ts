import type { CREATE, DELETE, UPDATE } from "../constants.js";

/**
 * Kinds of differences (create, delete or update).
 *
 * @category Difference
 * @example
 * ```typescript
 * const create: DifferenceKind = "CREATE";
 * const delete: DifferenceKind = "DELETE";
 * const update: DifferenceKind = "UPDATE";
 * ```
 */
export type DifferenceKind = typeof CREATE | typeof DELETE | typeof UPDATE;
