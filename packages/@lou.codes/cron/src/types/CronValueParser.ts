import type { Maybe, Unary } from "@lou.codes/types";

/**
 * Parses a value into a string or `undefined` if invalid.
 */
export type CronValueParser<Value> = Unary<Value, Maybe<string>>;
