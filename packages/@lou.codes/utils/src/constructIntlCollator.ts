import { construct } from "./construct.js";

/**
 * Functional alias for `new Intl.Collator()`, which enables language-sensitive
 * string comparison.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator
 */
export const constructIntlCollator = construct(Intl.Collator);
