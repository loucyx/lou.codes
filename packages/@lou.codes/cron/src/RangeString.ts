import type { RangeExpressionSeparatorToken } from "./RangeExpressionSeparatorToken.js";

/**
 * Type that represents a range of values for a cron string field.
 *
 * @category Cron String
 */
export type RangeString = `${number}${RangeExpressionSeparatorToken}${number}`;
