import stylelintOrder from "stylelint-order";

const KEBAB_CASE = "^[a-z][a-z0-9-]*$";
const LOWER_CASE = "lower";

/**
 * Stylelint configuration.
 *
 * @see [Stylelint rules](https://stylelint.io/user-guide/rules)
 */
// eslint-disable-next-line import/no-default-export
export default /** @type {const} @satisfies {import("stylelint").Config} */ ({
	defaultSeverity: "error",
	extends: ["stylelint-prettier/recommended"],
	plugins: [/** @type {import("stylelint").Plugin} */ (stylelintOrder)],
	rules: {
		/**
		 * Alpha-values must always use the number notation.
		 *
		 * @see [alpha-value-notation](https://stylelint.io/user-guide/rules/alpha-value-notation)
		 */
		"alpha-value-notation": "number",

		/**
		 * There must always be an empty line before at-rules.
		 *
		 * @see [at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before)
		 */
		"at-rule-empty-line-before": [
			"always",
			{
				except: ["blockless-after-blockless", "first-nested"],
				ignore: ["after-comment"],
			},
		],

		/**
		 * Applicable color-functions must always use modern notation.
		 *
		 * @see [color-function-notation](https://stylelint.io/user-guide/rules/color-function-notation)
		 */
		"color-function-notation": "modern",

		/**
		 * Specify short notation for hex colors.
		 *
		 * @see [color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length)
		 */
		"color-hex-length": "short",

		/**
		 * Colors must never be named.
		 *
		 * @see [color-named](https://stylelint.io/user-guide/rules/color-named)
		 */
		"color-named": "never",

		/**
		 * Specify a pattern for custom properties.
		 *
		 * @see [custom-property-pattern](https://stylelint.io/user-guide/rules/custom-property-pattern)
		 */
		"custom-property-pattern": KEBAB_CASE,

		/**
		 * Disallow !important within declarations.
		 *
		 * @see [declaration-no-important](https://stylelint.io/user-guide/rules/declaration-no-important)
		 */
		"declaration-no-important": true,

		/**
		 * Disallow unknown values for properties within declarations.
		 *
		 * @see [declaration-property-value-no-unknown](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown)
		 */
		"declaration-property-value-no-unknown": true,

		/**
		 * Font weight values must always be numbers.
		 *
		 * @see [font-weight-notation](https://stylelint.io/user-guide/rules/font-weight-notation)
		 */
		"font-weight-notation": "numeric",

		/**
		 * Specify lowercase for function names.
		 *
		 * @see [function-name-case](https://stylelint.io/user-guide/rules/function-name-case)
		 */
		"function-name-case": LOWER_CASE,

		/**
		 * Disallow scheme-relative urls.
		 *
		 * @see [function-url-no-scheme-relative](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative)
		 */
		"function-url-no-scheme-relative": true,

		/**
		 * Disallow quotes for urls.
		 *
		 * @see [function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes)
		 */
		"function-url-quotes": "always",

		/**
		 * Specify a list of allowed URL schemes.
		 *
		 * @see [function-url-scheme-allowed-list](https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list)
		 */
		"function-url-scheme-allowed-list": ["data", "/^http/"],

		/**
		 * Degree hues must always use angle notation.
		 *
		 * @see [hue-degree-notation](https://stylelint.io/user-guide/rules/hue-degree-notation)
		 */
		"hue-degree-notation": "angle",

		/**
		 * `@import` rules must always use URL notation.
		 *
		 * @see [import-notation](https://stylelint.io/user-guide/rules/import-notation)
		 */
		"import-notation": "url",

		/**
		 * Keyframe selectors must always use the keyword notation.
		 *
		 * @see [keyframe-selector-notation](https://stylelint.io/user-guide/rules/keyframe-selector-notation)
		 */
		"keyframe-selector-notation": "keyword",

		/**
		 * Specify a pattern for keyframe names.
		 *
		 * @see [keyframes-name-pattern](https://stylelint.io/user-guide/rules/keyframes-name-pattern)
		 */
		"keyframes-name-pattern": KEBAB_CASE,

		/**
		 * Disallow units for zero lengths.
		 *
		 * @see [length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)
		 */
		"length-zero-no-unit": true,

		/**
		 * Media feature ranges must always use context notation.
		 *
		 * @see [media-feature-range-notation](https://stylelint.io/user-guide/rules/media-feature-range-notation)
		 */
		"media-feature-range-notation": "context",

		/**
		 * Keep properties in alphabetical order.
		 *
		 * @see [order/properties-alphabetical-order](https://stylelint.io/user-guide/rules/order/properties-alphabetical-order)
		 */
		"order/properties-alphabetical-order": true,

		/**
		 * There must always be an empty line before rules.
		 *
		 * @see [rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before)
		 */
		"rule-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: ["after-comment"],
			},
		],

		/**
		 * Attribute values must never be quoted.
		 *
		 * @see [selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)
		 */
		"selector-attribute-quotes": "always",

		/**
		 * Limit the number of ID selectors in a selector.
		 *
		 * @see [selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id)
		 */
		"selector-max-id": 1,

		/**
		 * Specify complex notation for :not() pseudo-class selectors.
		 *
		 * @see [selector-not-notation](https://stylelint.io/user-guide/rules/selector-not-notation)
		 */
		"selector-not-notation": "complex",

		/**
		 * Applicable pseudo-elements must always use the double colon notation.
		 *
		 * @see [selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation)
		 */
		"selector-pseudo-element-colon-notation": "double",

		/**
		 * Specify lowercase for type selectors.
		 *
		 * @see [selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case)
		 */
		"selector-type-case": LOWER_CASE,

		/**
		 * Disallow redundant values within shorthand properties.
		 *
		 * @see [shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values)
		 */
		"shorthand-property-no-redundant-values": true,

		/**
		 * Specify lowercase for keywords values (camel for SVG keywords).
		 *
		 * @see [value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case)
		 */
		"value-keyword-case": [LOWER_CASE, { camelCaseSvgKeywords: true }],
	},
});
