import { construct } from "./construct.js";

/**
 * Functional alias for `new Intl.RelativeTimeFormat()`, which enables
 * language-sensitive relative time formatting.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
 */
export const constructIntlRelativeTimeFormat = construct(
	Intl.RelativeTimeFormat,
);
