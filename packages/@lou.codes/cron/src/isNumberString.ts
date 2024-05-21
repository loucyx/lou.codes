import { parseDecimal } from "@lou.codes/parsers";
import { isUndefined } from "@lou.codes/predicates";

/**
 * Predicate checking if given value is a number.
 *
 * @category Predicate
 */
export const isNumberString = <Value extends number>(
	input: string,
): input is `${Value}` => !isUndefined(parseDecimal(input));
