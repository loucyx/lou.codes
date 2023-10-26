import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Empty record (object).
 *
 * @category Object
 * @remarks
 * This is a type alias for an empty readonly record. Accessing properties gives
 * `undefined`.
 * @example
 * ```typescript
 * const emptyRecord: EmptyRecord = {};
 * ```
 * @see {@link ReadOnlyRecord}
 */
export type EmptyRecord = ReadOnlyRecord<PropertyKey, never>;
