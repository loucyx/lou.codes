import type { LocaleString } from "../src/LocaleString.js";

type English = LocaleString<"en", "UK" | "US">;
type Spanish = LocaleString<"es", "AR" | "MX", "_">;

export const enUS: English = "en-US";
export const esAR: Spanish = "es_AR";

// @ts-expect-error Invalid identifier (can't be empty).
export const emptyLocale: English = "";

// @ts-expect-error Locale identifier must be valid.
export const invalidLocale: English = "en-MX";

// @ts-expect-error Locale identifier must use the correct separator.
export const invalidSeparator: Spanish = "es-MX";
