import type { LocaleIdentifier } from "./LocaleIdentifier.js";
import type { MaybeEmpty } from "./MaybeEmpty.js";

/**
 * String for locales such as "en-US".
 *
 * @category String
 * @remarks
 * This type mainly exists to make {@link LocaleIdentifier} a little bit easier
 * to the eyes.
 * @example
 * ```typescript
 * type English1: LocaleIdentifier<"en", "US" | "UK">; // "en" | "en-US" | "en-UK"
 * type English2: LocaleIdentifier<"en", "US" | "UK", "_">; // "en" | "en_US" | "en_UK"
 * ```
 * @see {@link LocaleIdentifier}
 * @template LanguageCode 2 character language code.
 * @template CountryCodes Union of country codes.
 */
export type LocaleString<
	LanguageCode extends `${string}${string}`,
	CountryCodes extends `${string}${string}`,
	Separator extends "-" | "_" = "-",
> = `${LanguageCode}${MaybeEmpty<`${Separator}${CountryCodes}`>}`;
