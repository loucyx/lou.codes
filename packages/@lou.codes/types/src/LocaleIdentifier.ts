import type { EmptyString } from "./EmptyString.js";
import type { LocaleString } from "./LocaleString.js";

/**
 * Locale identifiers (language-country).
 *
 * @category String
 * @remarks
 * When using i18n tools, this is a stricter union type than `string` to handle
 * the locale identifiers.
 * @example
 * ```ts
 * const locale: LocaleIdentifier = "en-US";
 * ```
 * @see {@link EmptyString}
 */
export type LocaleIdentifier =
	| LocaleString<
			"ar",
			| "BH"
			| "DZ"
			| "JO"
			| "KW"
			| "OM"
			| "PS"
			| "QA"
			| `${"A" | "Y"}E`
			| `E${"G" | "H" | "R"}`
			| `I${"B" | "Y"}`
			| `I${"L" | "Q"}`
			| `M${"A" | "R"}`
			| `S${"A" | "D" | "O" | "S" | "Y"}`
			| `T${"D" | "N"}`
	  >
	| LocaleString<
			"en",
			| "CA"
			| "HK"
			| "IE"
			| "JM"
			| "SG"
			| "TT"
			| "VI"
			| `A${"S" | "U"}`
			| `B${"E" | "W" | "Z"}`
			| `G${"B" | "U"}`
			| `I${"L" | "N"}`
			| `M${"H" | "P" | "T" | "U"}`
			| `N${"A" | "Z"}`
			| `P${"H" | "K"}`
			| `U${"M" | "S"}`
			| `Z${"A" | "W"}`
	  >
	| LocaleString<
			"es",
			| "419"
			| "AR"
			| "BO"
			| "DO"
			| "HN"
			| "MX"
			| "NI"
			| "SV"
			| "VE"
			| `C${"L" | "O" | "R"}`
			| `E${"C" | "S"}`
			| `G${"Q" | "T"}`
			| `P${"A" | "E" | "R" | "Y"}`
			| `U${"S" | "Y"}`
	  >
	| LocaleString<
			"fr",
			| "DJ"
			| "FR"
			| "KM"
			| "LU"
			| "NE"
			| "SN"
			| `B${"E" | "F" | "I" | "J" | "L"}`
			| `C${"A" | "D" | "F" | "G" | "H" | "I" | "M"}`
			| `G${"A" | "N" | "P" | "Q"}`
			| `M${"C" | "F" | "G" | "L" | "Q"}`
			| `R${"E" | "W"}`
			| `T${"D" | "G"}`
	  >
	| LocaleString<
			"pa",
			LocaleString<"Arab", "PK"> | LocaleString<"Guru", "IN">
	  >
	| LocaleString<
			"uz",
			LocaleString<"Arab", "AF"> | LocaleString<"Cyrl" | "Latn", "UZ">
	  >
	| LocaleString<
			"zh",
			| LocaleString<"Hans", "CN" | "SG">
			| LocaleString<"Hant", "TW">
			| LocaleString<`Han${"s" | "t"}`, "HK" | "MO">
	  >
	| LocaleString<"af", `${"N" | "Z"}A`>
	| LocaleString<"ak", "GH">
	| LocaleString<"am", "ET">
	| LocaleString<"as", "IN">
	| LocaleString<"asa", "TZ">
	| LocaleString<"az", LocaleString<"Cyrl" | "Latn", "AZ">>
	| LocaleString<"be", "BY">
	| LocaleString<"bem", "ZM">
	| LocaleString<"bez", "TZ">
	| LocaleString<"bg", "BG">
	| LocaleString<"bm", "ML">
	| LocaleString<"bn", "BD" | "IN">
	| LocaleString<"bo", `${"C" | "I"}N`>
	| LocaleString<"bs", "BA">
	| LocaleString<"ca", "ES">
	| LocaleString<"cgg", "UG">
	| LocaleString<"chr", "US">
	| LocaleString<"cs", "CZ">
	| LocaleString<"cy", "GB">
	| LocaleString<"da", "DK">
	| LocaleString<"dav", "KE">
	| LocaleString<"de", "AT" | "CH" | `${"B" | "D"}E` | `L${"I" | "U"}`>
	| LocaleString<"ebu", "KE">
	| LocaleString<"ee", "GH" | "TG">
	| LocaleString<"el", "CY" | "GR">
	| LocaleString<"et", "EE">
	| LocaleString<"eu", "ES">
	| LocaleString<"fa", "AF" | "IR">
	| LocaleString<"ff", "SN">
	| LocaleString<"fi", "FI">
	| LocaleString<"fil", "PH">
	| LocaleString<"fo", "FO">
	| LocaleString<"ga", "IE">
	| LocaleString<"gl", "ES">
	| LocaleString<"gsw", "CH">
	| LocaleString<"gu", "IN">
	| LocaleString<"guz", "KE">
	| LocaleString<"gv", "GB">
	| LocaleString<"ha", LocaleString<"Latn", "GH" | `N${"E" | "G"}`>>
	| LocaleString<"haw", "US">
	| LocaleString<"he", "IL">
	| LocaleString<"hi", "IN">
	| LocaleString<"hr", "HR">
	| LocaleString<"hu", "HU">
	| LocaleString<"hy", "AM">
	| LocaleString<"id", "ID">
	| LocaleString<"ig", "NG">
	| LocaleString<"ii", "CN">
	| LocaleString<"is", "IS">
	| LocaleString<"it", "CH" | "IT">
	| LocaleString<"ja", "JP">
	| LocaleString<"jmc", "TZ">
	| LocaleString<"ka", "GE">
	| LocaleString<"kab", "DZ">
	| LocaleString<"kam", "KE">
	| LocaleString<"kde", "TZ">
	| LocaleString<"kea", "CV">
	| LocaleString<"khq", "ML">
	| LocaleString<"ki", "KE">
	| LocaleString<"kk", LocaleString<"Cyrl", "KZ">>
	| LocaleString<"kl", "GL">
	| LocaleString<"kln", "KE">
	| LocaleString<"km", "KH">
	| LocaleString<"kn", "IN">
	| LocaleString<"ko", "KR">
	| LocaleString<"kok", "IN">
	| LocaleString<"kw", "GB">
	| LocaleString<"lag", "TZ">
	| LocaleString<"lg", "UG">
	| LocaleString<"lt", "LT">
	| LocaleString<"luo", "KE">
	| LocaleString<"luy", "KE">
	| LocaleString<"lv", "LV">
	| LocaleString<"mas", "KE" | "TZ">
	| LocaleString<"mer", "KE">
	| LocaleString<"mfe", "MU">
	| LocaleString<"mg", "MG">
	| LocaleString<"mk", "MK">
	| LocaleString<"ml", "IN">
	| LocaleString<"mr", "IN">
	| LocaleString<"ms", "BN" | "MY">
	| LocaleString<"mt", "MT">
	| LocaleString<"my", "MM">
	| LocaleString<"naq", "NA">
	| LocaleString<"nb", "NO">
	| LocaleString<"nd", "ZW">
	| LocaleString<"ne", "IN" | "NP">
	| LocaleString<"nl", "BE" | "NL">
	| LocaleString<"nn", "NO">
	| LocaleString<"nyn", "UG">
	| LocaleString<"om", "ET" | "KE">
	| LocaleString<"or", "IN">
	| LocaleString<"pl", "PL">
	| LocaleString<"ps", "AF">
	| LocaleString<"pt", "BR" | "GW" | "MZ" | "PT">
	| LocaleString<"rm", "CH">
	| LocaleString<"ro", "MD" | "RO">
	| LocaleString<"rof", "TZ">
	| LocaleString<"ru", "MD" | "RU" | "UA">
	| LocaleString<"rw", "RW">
	| LocaleString<"rwk", "TZ">
	| LocaleString<"saq", "KE">
	| LocaleString<"seh", "MZ">
	| LocaleString<"ses", "ML">
	| LocaleString<"sg", "CF">
	| LocaleString<"shi", LocaleString<"Latn" | "Tfng", "MA">>
	| LocaleString<"si", "LK">
	| LocaleString<"sk", "SK">
	| LocaleString<"sl", "SI">
	| LocaleString<"sn", "ZW">
	| LocaleString<"so", "DJ" | "ET" | "KE" | "SO">
	| LocaleString<"sq", "AL">
	| LocaleString<"sr", LocaleString<"Cyrl" | "Latn", "BA" | "ME" | "RS">>
	| LocaleString<"sv", "FI" | "SE">
	| LocaleString<"sw", "KE" | "TZ">
	| LocaleString<"ta", "IN" | "LK">
	| LocaleString<"te", "IN">
	| LocaleString<"teo", "KE" | "UG">
	| LocaleString<"th", "TH">
	| LocaleString<"ti", `E${"R" | "T"}`>
	| LocaleString<"to", "TO">
	| LocaleString<"tr", "TR">
	| LocaleString<"tzm", LocaleString<"Latn", "MA">>
	| LocaleString<"uk", "UA">
	| LocaleString<"ur", "IN" | "PK">
	| LocaleString<"vi", "VN">
	| LocaleString<"vun", "TZ">
	| LocaleString<"xog", "UG">
	| LocaleString<"yo", "NG">
	| LocaleString<"zu", "ZA">
	| "eo"
	| "yue-Hant-HK";
