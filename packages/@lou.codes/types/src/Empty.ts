import type { EmptyArray } from "./EmptyArray.js";
import type { EmptyRecord } from "./EmptyRecord.js";
import type { EmptyString } from "./EmptyString.js";

/**
 * Empty array, object or string.
 *
 * @category Array
 * @category Object
 * @category String
 * @remarks
 * Union type of {@link EmptyArray}, {@link EmptyRecord} and {@link EmptyString},
 * to signify values that are empty.
 * @example
 * ```typescript
 * const emptyString: Empty = "";
 * const emptyArray: Empty = [];
 * const emptyRecord: Empty = {};
 * ```
 * @see {@link EmptyArray}
 * @see {@link EmptyRecord}
 * @see {@link EmptyString}
 */
export type Empty = EmptyArray | EmptyRecord | EmptyString;
