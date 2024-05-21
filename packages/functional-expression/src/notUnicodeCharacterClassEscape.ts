import type { Strigifiable } from "@lou.codes/types";
import { escape } from "./escape.js";

/**
 * Matches any character that is not in the specified unicode category.
 *
 * Requires the u flag.
 *
 * @category Character classes
 * @see [Unicode Character class escape](https://mdn.io/Unicode%20character%20class%20escape)
 */
export const notUnicodeCharacterClassEscape = <
	const Category extends Strigifiable,
>(
	category: Category,
) => escape(`P{${category}}`);
