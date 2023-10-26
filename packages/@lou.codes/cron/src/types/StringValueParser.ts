import type { Maybe, Unary } from "@lou.codes/types";

/**
 * Parses a string into a value of given type or `undefined` if invalid
 */
export type StringValueParser<Value> = Unary<string, Maybe<Value>>;
