import { construct } from "./construct.js";

/**
 * Functional alias for `new Intl.NumberFormat()`, which enables
 * language-sensitive number formatting.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export const constructIntlNumberFormat = construct(Intl.NumberFormat);
