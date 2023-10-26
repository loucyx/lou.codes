import type { LocaleIdentifier } from "../src/LocaleIdentifier.js";

export const enUS: LocaleIdentifier = "en-US";
export const esAR: LocaleIdentifier = "es-AR";

// @ts-expect-error Invalid identifier (can't be empty).
export const emptyLocale: LocaleIdentifier = "";

// @ts-expect-error Locale identifier must be valid.
export const invalidLocale: LocaleIdentifier = "en-MX";
