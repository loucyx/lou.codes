const KEBAB_CASE = "^[a-z][a-z0-9-]*$";
const LOWER_CASE = "lower";
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const stylelintOrder = require("stylelint-order");

/**
 * Stylelint configuration.
 * @see [Stylelint rules](https://stylelint.io/user-guide/rules)
 */
// eslint-disable-next-line functional/immutable-data
module.exports = Object.freeze(
	/** @satisfies {import("stylelint").Config} */ ({
		defaultSeverity: "error",
		extends: ["stylelint-prettier/recommended"],
		plugins: [stylelintOrder],
		rules: {
			// Alpha-values must always use the number notation.
			"alpha-value-notation": "number",
			// There must always be an empty line before at-rules.
			"at-rule-empty-line-before": [
				"always",
				{
					except: ["blockless-after-blockless", "first-nested"],
					ignore: ["after-comment"],
				},
			],
			// Applicable color-functions must always use modern notation.
			"color-function-notation": "modern",
			// Specify short notation for hex colors.
			"color-hex-length": "short",
			// Colors must never be named.
			"color-named": "never",
			// Specify a pattern for custom properties.
			"custom-property-pattern": KEBAB_CASE,
			// Disallow !important within declarations.
			"declaration-no-important": true,
			// Disallow unknown values for properties within declarations.
			"declaration-property-value-no-unknown": true,
			// Font weight values must always be numbers.
			"font-weight-notation": "numeric",
			// Specify lowercase for function names.
			"function-name-case": LOWER_CASE,
			// Disallow scheme-relative urls.
			"function-url-no-scheme-relative": true,
			// Disallow quotes for urls.
			"function-url-quotes": "always",
			// Specify a list of allowed URL schemes.
			"function-url-scheme-allowed-list": ["data", "/^http/"],
			// Degree hues must always use angle notation.
			"hue-degree-notation": "angle",
			// @import rules must always use URL notation.
			"import-notation": "url",
			// Keyframe selectors must always use the keyword notation.
			"keyframe-selector-notation": "keyword",
			// Specify a pattern for keyframe names.
			"keyframes-name-pattern": KEBAB_CASE,
			// Disallow units for zero lengths.
			"length-zero-no-unit": true,
			// Media feature ranges must always use context notation.
			"media-feature-range-notation": "context",
			// Keep properties in alphabetical order.
			"order/properties-alphabetical-order": true,
			// There must always be an empty line before rules.
			"rule-empty-line-before": [
				"always",
				{
					except: ["first-nested"],
					ignore: ["after-comment"],
				},
			],
			// Attribute values must never be quoted.
			"selector-attribute-quotes": "always",
			// Limit the number of ID selectors in a selector.
			"selector-max-id": 1,
			// Specify complex notation for :not() pseudo-class selectors.
			"selector-not-notation": "complex",
			// Applicable pseudo-elements must always use the double colon notation.
			"selector-pseudo-element-colon-notation": "double",
			// Specify lowercase for type selectors.
			"selector-type-case": LOWER_CASE,
			// Disallow redundant values within shorthand properties.
			"shorthand-property-no-redundant-values": true,
			// Specify lowercase for keywords values (camel for SVG keywords).
			"value-keyword-case": [LOWER_CASE, { camelCaseSvgKeywords: true }],
		},
	}),
);
