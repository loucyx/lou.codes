import { match } from "@lou.codes/predicates";
import { DIGIT, END, START, join, quantity } from "functional-expression";
import { RANGE_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Regular expression to test if given string is a range.
 *
 * @category Regular Expression
 */
export const rangeStringMatch = match(
	join(
		"/",
		START,
		quantity("1,2")(DIGIT),
		RANGE_EXPRESSION_SEPARATOR_TOKEN,
		quantity("1,2")(DIGIT),
		END,
		"/u",
	),
);
