import type { EmptyString } from "./EmptyString.js";

/**
 * Locale identifiers (language-country).
 *
 * @remarks
 * When using i18n tools, this is a stricter union type than `string` to handle
 * the locale identifiers.
 * @category Common
 * @example
 * ```ts
 * const locale: LocaleIdentifier = "en-US";
 * ```
 * @see {@link EmptyString}
 */
export type LocaleIdentifier =
	| "eo"
	| "yue-Hant-HK"
	| `af${EmptyString | "-NA" | "-ZA"}`
	| `ak${EmptyString | "-GH"}`
	| `am${EmptyString | "-ET"}`
	| `ar${
			| EmptyString
			| "-AE"
			| "-BH"
			| "-DZ"
			| "-EG"
			| "-EH"
			| "-ER"
			| "-IL"
			| "-IQ"
			| "-JO"
			| "-KW"
			| "-LB"
			| "-LY"
			| "-MA"
			| "-MR"
			| "-OM"
			| "-PS"
			| "-QA"
			| "-SA"
			| "-SD"
			| "-SO"
			| "-SS"
			| "-SY"
			| "-TD"
			| "-TN"
			| "-YE"}`
	| `as${EmptyString | "-IN"}`
	| `asa${EmptyString | "-TZ"}`
	| `az${
			| EmptyString
			| `-Cyrl${EmptyString | "-AZ"}`
			| `-Latn${EmptyString | "-AZ"}`}`
	| `be${EmptyString | "-BY"}`
	| `bem${EmptyString | "-ZM"}`
	| `bez${EmptyString | "-TZ"}`
	| `bg${EmptyString | "-BG"}`
	| `bm${EmptyString | "-ML"}`
	| `bn${EmptyString | "-BD" | "-IN"}`
	| `bo${EmptyString | "-CN" | "-IN"}`
	| `bs${EmptyString | "-BA"}`
	| `ca${EmptyString | "-ES"}`
	| `cgg${EmptyString | "-UG"}`
	| `chr${EmptyString | "-US"}`
	| `cs${EmptyString | "-CZ"}`
	| `cy${EmptyString | "-GB"}`
	| `da${EmptyString | "-DK"}`
	| `dav${EmptyString | "-KE"}`
	| `de${EmptyString | "-AT" | "-BE" | "-CH" | "-DE" | "-LI" | "-LU"}`
	| `ebu${EmptyString | "-KE"}`
	| `ee${EmptyString | "-GH" | "-TG"}`
	| `el${EmptyString | "-CY" | "-GR"}`
	| `en${
			| EmptyString
			| "-AS"
			| "-AU"
			| "-BE"
			| "-BW"
			| "-BZ"
			| "-CA"
			| "-GB"
			| "-GU"
			| "-HK"
			| "-IE"
			| "-IL"
			| "-IN"
			| "-JM"
			| "-MH"
			| "-MP"
			| "-MT"
			| "-MU"
			| "-NA"
			| "-NZ"
			| "-PH"
			| "-PK"
			| "-SG"
			| "-TT"
			| "-UM"
			| "-US"
			| "-VI"
			| "-ZA"
			| "-ZW"}`
	| `es${
			| EmptyString
			| "-419"
			| "-AR"
			| "-BO"
			| "-CL"
			| "-CO"
			| "-CR"
			| "-DO"
			| "-EC"
			| "-ES"
			| "-GQ"
			| "-GT"
			| "-HN"
			| "-MX"
			| "-NI"
			| "-PA"
			| "-PE"
			| "-PR"
			| "-PY"
			| "-SV"
			| "-US"
			| "-UY"
			| "-VE"}`
	| `et${EmptyString | "-EE"}`
	| `eu${EmptyString | "-ES"}`
	| `fa${EmptyString | "-AF" | "-IR"}`
	| `ff${EmptyString | "-SN"}`
	| `fi${EmptyString | "-FI"}`
	| `fil${EmptyString | "-PH"}`
	| `fo${EmptyString | "-FO"}`
	| `fr${
			| EmptyString
			| "-BE"
			| "-BF"
			| "-BI"
			| "-BJ"
			| "-BL"
			| "-CA"
			| "-CD"
			| "-CF"
			| "-CG"
			| "-CH"
			| "-CI"
			| "-CM"
			| "-DJ"
			| "-FR"
			| "-GA"
			| "-GN"
			| "-GP"
			| "-GQ"
			| "-KM"
			| "-LU"
			| "-MC"
			| "-MF"
			| "-MG"
			| "-ML"
			| "-MQ"
			| "-NE"
			| "-RE"
			| "-RW"
			| "-SN"
			| "-TD"
			| "-TG"}`
	| `ga${EmptyString | "-IE"}`
	| `gl${EmptyString | "-ES"}`
	| `gsw${EmptyString | "-CH"}`
	| `gu${EmptyString | "-IN"}`
	| `guz${EmptyString | "-KE"}`
	| `gv${EmptyString | "-GB"}`
	| `ha${EmptyString | `-Latn${EmptyString | "-GH" | "-NE" | "-NG"}`}`
	| `haw${EmptyString | "-US"}`
	| `he${EmptyString | "-IL"}`
	| `hi${EmptyString | "-IN"}`
	| `hr${EmptyString | "-HR"}`
	| `hu${EmptyString | "-HU"}`
	| `hy${EmptyString | "-AM"}`
	| `id${EmptyString | "-ID"}`
	| `ig${EmptyString | "-NG"}`
	| `ii${EmptyString | "-CN"}`
	| `is${EmptyString | "-IS"}`
	| `it${EmptyString | "-CH" | "-IT"}`
	| `ja${EmptyString | "-JP"}`
	| `jmc${EmptyString | "-TZ"}`
	| `ka${EmptyString | "-GE"}`
	| `kab${EmptyString | "-DZ"}`
	| `kam${EmptyString | "-KE"}`
	| `kde${EmptyString | "-TZ"}`
	| `kea${EmptyString | "-CV"}`
	| `khq${EmptyString | "-ML"}`
	| `ki${EmptyString | "-KE"}`
	| `kk${EmptyString | `-Cyrl${EmptyString | "-KZ"}`}`
	| `kl${EmptyString | "-GL"}`
	| `kln${EmptyString | "-KE"}`
	| `km${EmptyString | "-KH"}`
	| `kn${EmptyString | "-IN"}`
	| `ko${EmptyString | "-KR"}`
	| `kok${EmptyString | "-IN"}`
	| `kw${EmptyString | "-GB"}`
	| `lag${EmptyString | "-TZ"}`
	| `lg${EmptyString | "-UG"}`
	| `lt${EmptyString | "-LT"}`
	| `luo${EmptyString | "-KE"}`
	| `luy${EmptyString | "-KE"}`
	| `lv${EmptyString | "-LV"}`
	| `mas${EmptyString | "-KE" | "-TZ"}`
	| `mer${EmptyString | "-KE"}`
	| `mfe${EmptyString | "-MU"}`
	| `mg${EmptyString | "-MG"}`
	| `mk${EmptyString | "-MK"}`
	| `ml${EmptyString | "-IN"}`
	| `mr${EmptyString | "-IN"}`
	| `ms${EmptyString | "-BN" | "-MY"}`
	| `mt${EmptyString | "-MT"}`
	| `my${EmptyString | "-MM"}`
	| `naq${EmptyString | "-NA"}`
	| `nb${EmptyString | "-NO"}`
	| `nd${EmptyString | "-ZW"}`
	| `ne${EmptyString | "-IN" | "-NP"}`
	| `nl${EmptyString | "-BE" | "-NL"}`
	| `nn${EmptyString | "-NO"}`
	| `nyn${EmptyString | "-UG"}`
	| `om${EmptyString | "-ET" | "-KE"}`
	| `or${EmptyString | "-IN"}`
	| `pa${
			| EmptyString
			| `-Arab${EmptyString | "-PK"}`
			| `-Guru${EmptyString | "-IN"}`}`
	| `pl${EmptyString | "-PL"}`
	| `ps${EmptyString | "-AF"}`
	| `pt${EmptyString | "-BR" | "-GW" | "-MZ" | "-PT"}`
	| `rm${EmptyString | "-CH"}`
	| `ro${EmptyString | "-MD" | "-RO"}`
	| `rof${EmptyString | "-TZ"}`
	| `ru${EmptyString | "-MD" | "-RU" | "-UA"}`
	| `rw${EmptyString | "-RW"}`
	| `rwk${EmptyString | "-TZ"}`
	| `saq${EmptyString | "-KE"}`
	| `seh${EmptyString | "-MZ"}`
	| `ses${EmptyString | "-ML"}`
	| `sg${EmptyString | "-CF"}`
	| `shi${
			| EmptyString
			| `-Latn${EmptyString | "-MA"}`
			| `-Tfng${EmptyString | "-MA"}`}`
	| `si${EmptyString | "-LK"}`
	| `sk${EmptyString | "-SK"}`
	| `sl${EmptyString | "-SI"}`
	| `sn${EmptyString | "-ZW"}`
	| `so${EmptyString | "-DJ" | "-ET" | "-KE" | "-SO"}`
	| `sq${EmptyString | "-AL"}`
	| `sr${
			| EmptyString
			| `-Cyrl${EmptyString | "-BA" | "-ME" | "-RS"}`
			| `-Latn${EmptyString | "-BA" | "-ME" | "-RS"}`}`
	| `sv${EmptyString | "-FI" | "-SE"}`
	| `sw${EmptyString | "-KE" | "-TZ"}`
	| `ta${EmptyString | "-IN" | "-LK"}`
	| `te${EmptyString | "-IN"}`
	| `teo${EmptyString | "-KE" | "-UG"}`
	| `th${EmptyString | "-TH"}`
	| `ti${EmptyString | "-ER" | "-ET"}`
	| `to${EmptyString | "-TO"}`
	| `tr${EmptyString | "-TR"}`
	| `tzm${EmptyString | `-Latn${EmptyString | "-MA"}`}`
	| `uk${EmptyString | "-UA"}`
	| `ur${EmptyString | "-IN" | "-PK"}`
	| `uz${
			| EmptyString
			| `-Arab${EmptyString | "-AF"}`
			| `-Cyrl${EmptyString | "-UZ"}`
			| `-Latn${EmptyString | "-UZ"}`}`
	| `vi${EmptyString | "-VN"}`
	| `vun${EmptyString | "-TZ"}`
	| `xog${EmptyString | "-UG"}`
	| `yo${EmptyString | "-NG"}`
	| `zh${
			| EmptyString
			| `-Hans${EmptyString | "-CN" | "-HK" | "-MO" | "-SG"}`
			| `-Hant${EmptyString | "-HK" | "-MO" | "-TW"}`}`
	| `zu${EmptyString | "-ZA"}`;
