import type { ListString } from "./ListString.js";
import { LIST_EXPRESSION_SEPARATOR_TOKEN } from "./tokens.js";

/**
 * Predicate checking if given value is a {@link ListString}.
 *
 * @category Predicate
 * @see {@link ListString}
 * @see {@link LIST_EXPRESSION_SEPARATOR_TOKEN}
 */
export const isListString = (value: string): value is ListString =>
	value.includes(LIST_EXPRESSION_SEPARATOR_TOKEN);
