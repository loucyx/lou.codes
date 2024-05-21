import type { ListExpressionSeparatorToken } from "./ListExpressionSeparatorToken.js";
import type { ValueOrRangeString } from "./ValueOrRangeString.js";

/**
 * Type that represents a list of values for a cron string field.
 *
 * @category Cron String
 *
 * @see {@link ValueOrRangeString}
 */
export type ListString =
	`${string}${ListExpressionSeparatorToken}${ValueOrRangeString}`;
