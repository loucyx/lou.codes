import type { LocaleIdentifier, ReadOnly } from "@vangware/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Intl.Locale()`, which represents a Unicode locale
 * identifier.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale
 */
export const constructIntlLocale = construct(Intl.Locale) as (
	tag: ReadOnly<Intl.Locale | LocaleIdentifier>,
	options?: ReadOnly<Intl.LocaleOptions>,
) => Intl.Locale;
