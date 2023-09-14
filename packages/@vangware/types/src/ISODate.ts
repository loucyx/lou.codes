import type { ISODayOfMonth } from "./ISODayOfMonth.js";
import type { ISOMonth } from "./ISOMonth.js";
import type { ISOYear } from "./ISOYear.js";

/**
 * String representing an ISO date.
 *
 * @category Date
 * @remarks
 * This type is a string representing an ISO 8601 format of a date (returned by
 * `Date.prototype.toISOString`).
 * @example
 * ```typescript
 * const date: ISODate = "2020-01-01T00:00:00.000Z";
 * ```
 * @see [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
 * @see [Date](https://mdn.io/Date)
 * @see [Date.prototype.toISOString](https://mdn.io/Date.prototype.toISOString)
 */
export type ISODate =
	`${ISOYear}-${ISOMonth}-${ISODayOfMonth}T${bigint}${bigint}:${bigint}${bigint}:${bigint}${bigint}.${bigint}${bigint}${bigint}Z`;
