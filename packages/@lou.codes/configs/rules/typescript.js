import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import { ERROR, OFF } from "./levels.js";

/**
 * ESLint TypeScript rules.
 * @see [@typescript-eslint/eslint-plugin](https://npm.im/@typescript-eslint/eslint-plugin)
 */
export default Object.freeze([
	/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
		rules: typescriptEslintPlugin.configs.recommended.rules,
	}),
	/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
		languageOptions: {
			// TypeScript parser just rocks
			parser: typescriptParser,
			parserOptions: {
				// Additional language features
				ecmaFeatures: {
					// Enable global strict mode
					impliedStrict: true,
					// JSX enabled by default (even if it's not a React project)
					jsx: true,
				},
				// Latest ES version
				ecmaVersion: "latest",
				// Luckily now the TypeScript linter can figure out the project by itself
				project: true,
				// Using ECMAScript modules
				sourceType: "module",
			},
		},
		plugins: { "@typescript-eslint": typescriptEslintPlugin },
		rules: {
			// Grouping overloaded members together to improve readability.
			"@typescript-eslint/adjacent-overload-signatures": ERROR,
			// Consistent array types using generics `Array` and `ReadonlyArray`.
			"@typescript-eslint/array-type": [ERROR, { default: "generic" }],
			// Avoid await on non thenable values.
			"@typescript-eslint/await-thenable": ERROR,
			// @ts-comment rules.
			"@typescript-eslint/ban-ts-comment": [
				ERROR,
				{
					// No limitations for @ts-check.
					"ts-check": false,
					// Requires description for @ts-expect-error.
					"ts-expect-error": "allow-with-description",
					// Disables @ts-ignore & @ts-nocheck.
					"ts-ignore": true,
					"ts-nocheck": true,
				},
			],
			// Avoid TSLint comments when we are using ESLint.
			"@typescript-eslint/ban-tslint-comment": ERROR,
			// Ban some unwanted types.
			"@typescript-eslint/ban-types": [
				ERROR,
				{
					types: {
						Boolean: {
							fixWith: "boolean",
							message: "Use `boolean` instead.",
						},
						Function: false,
						Number: {
							fixWith: "number",
							message: "Use `number` instead.",
						},
						Object: {
							fixWith: "Record<PropertyKey, unknown>",
							message: "Use `object` instead.",
						},
						String: {
							fixWith: "string",
							message: "Use `string` instead.",
						},
						Symbol: {
							fixWith: "symbol",
							message: "Use `symbol` instead.",
						},
					},
				},
			],
			// Prettier takes care of this.
			"@typescript-eslint/comma-dangle": OFF,
			// Use `Record` instead of index signature.
			"@typescript-eslint/consistent-indexed-object-style": [
				ERROR,
				"record",
			],
			// Use `as` assertion.
			"@typescript-eslint/consistent-type-assertions": [
				ERROR,
				{ assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
			],
			// Use `type` for type definitions (instead of interfaces).
			"@typescript-eslint/consistent-type-definitions": [ERROR, "type"],
			// Enforce "typed imports".
			"@typescript-eslint/consistent-type-imports": [
				ERROR,
				{
					fixStyle: "inline-type-imports",
				},
			],
			// Enforce dot.notation instead of square["bracket"]["notation"].
			"@typescript-eslint/dot-notation": ERROR,
			// Let's use the power of inference.
			"@typescript-eslint/explicit-function-return-type": OFF,
			// When working with classes, let's be explicit about accessibility.
			"@typescript-eslint/explicit-member-accessibility": [
				ERROR,
				{
					accessibility: "explicit",
					overrides: {
						accessors: "explicit",
						constructors: "explicit",
					},
				},
			],
			// Let's use the power of inference.
			"@typescript-eslint/explicit-module-boundary-types": OFF,
			// Prettier takes care of this.
			"@typescript-eslint/indent": OFF,
			// Don't declare stuff without giving it a value.
			"@typescript-eslint/init-declarations": ERROR,
			// Prettier should take care of this, but just in case.
			"@typescript-eslint/member-delimiter-style": [
				ERROR,
				{
					multiline: { delimiter: "semi", requireLast: true },
					singleline: { delimiter: "semi", requireLast: false },
				},
			],
			// If we work with classes, let's make sure they are tidy.
			"@typescript-eslint/member-ordering": ERROR,
			// Classes? Well, let's make those methods look like arrow functions.
			"@typescript-eslint/method-signature-style": [ERROR, "property"],
			// Consistent naming.
			"@typescript-eslint/naming-convention": [
				ERROR,
				{
					// eslint-disable-next-line no-null/no-null
					format: null,
					leadingUnderscore: "allow",
					selector: "default",
					trailingUnderscore: "forbid",
				},
				{
					format: ["camelCase", "PascalCase", "UPPER_CASE"],
					selector: ["variable", "enumMember"],
				},
				{
					format: ["camelCase", "PascalCase"],
					selector: "function",
				},
				{
					format: ["camelCase"],
					leadingUnderscore: "allow",
					selector: ["parameter", "classProperty", "classMethod"],
					trailingUnderscore: "forbid",
				},
				{
					format: ["PascalCase"],
					leadingUnderscore: "forbid",
					selector: [
						"class",
						"enum",
						"interface",
						"typeAlias",
						"typeLike",
						"typeParameter",
					],
				},
			],
			// Just use `[]`.
			"@typescript-eslint/no-array-constructor": ERROR,
			// Avoid `.toString()` without a useful return type.
			"@typescript-eslint/no-base-to-string": ERROR,
			// If working with classes, let's avoid duplicated members.
			"@typescript-eslint/no-dupe-class-members": ERROR,
			// Avoid `delete` of dynamic properties.
			"@typescript-eslint/no-dynamic-delete": ERROR,
			// Avoid confusing `() => {}`.
			"@typescript-eslint/no-empty-function": ERROR,
			// An empty interface is useless.
			"@typescript-eslint/no-empty-interface": ERROR,
			// `any` is EVIL™
			"@typescript-eslint/no-explicit-any": ERROR,
			// A class with all statics can be turned into an object.
			"@typescript-eslint/no-extraneous-class": ERROR,
			// Let's avoid floating (unhandled) promises.
			"@typescript-eslint/no-floating-promises": ERROR,
			// Use `for/of`, or better yet `map` or `forEach`.
			"@typescript-eslint/no-for-in-array": ERROR,
			// This is super insecure, avoid it at all costs.
			"@typescript-eslint/no-implied-eval": ERROR,
			// Inference is beautiful.
			"@typescript-eslint/no-inferrable-types": OFF,
			// Avoid using `this` outside a class.
			"@typescript-eslint/no-invalid-this": OFF,
			// Avoid `void` for types, use `undefined` instead.
			"@typescript-eslint/no-invalid-void-type": OFF,
			// Avoid defining functions inside loops.
			"@typescript-eslint/no-loop-func": OFF,
			// Avoid loss of precision in numbers at runtime.
			"@typescript-eslint/no-loss-of-precision": OFF,
			// Disallow the `void` operator except when used to discard a value
			"@typescript-eslint/no-meaningless-void-operator": ERROR,
			// Avoid missuses of the `new` declaration.
			"@typescript-eslint/no-misused-new": ERROR,
			// Avoid missuses of promises.
			"@typescript-eslint/no-misused-promises": ERROR,
			// Old TS.
			"@typescript-eslint/no-namespace": ERROR,
			// Prevents using non-null assertion with nullish coalescing.
			"@typescript-eslint/no-non-null-asserted-nullish-coalescing": ERROR,
			// Avoid null assertion
			"@typescript-eslint/no-non-null-assertion": ERROR,
			// Avoid re-declaration of a value.
			"@typescript-eslint/no-redeclare": ERROR,
			// Disallow members of unions and intersections that do nothing or override type information.
			"@typescript-eslint/no-redundant-type-constituents": ERROR,
			// Use ES imports.
			"@typescript-eslint/no-require-imports": ERROR,
			// Avoid name shadowing.
			"@typescript-eslint/no-shadow": [
				ERROR,
				{ allow: ["_"], hoist: "all" },
			],
			// Just use arrow functions, _this/that aliases are no longer needed.
			"@typescript-eslint/no-this-alias": ERROR,
			// Throw errors, not literals.
			"@typescript-eslint/no-throw-literal": ERROR,
			// If it's a `boolean`, use it as such.
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": ERROR,
			// Avoid conditions with values that can't be falsy.
			"@typescript-eslint/no-unnecessary-condition": ERROR,
			// If the type assertion is the same, skip it.
			"@typescript-eslint/no-unnecessary-type-arguments": ERROR,
			// Don't assert something that doesn't need assertion.
			"@typescript-eslint/no-unnecessary-type-assertion": ERROR,
			// Don't do `extends any` or `extends unknown`. That's the default.
			"@typescript-eslint/no-unnecessary-type-constraint": ERROR,
			// Disallows calling an function with an `any` type value.
			"@typescript-eslint/no-unsafe-argument": ERROR,
			// Avoid `any` assignments.
			"@typescript-eslint/no-unsafe-assignment": ERROR,
			// Avoid calling `any`.
			"@typescript-eslint/no-unsafe-call": ERROR,
			// Avoid accessing `any` members.
			"@typescript-eslint/no-unsafe-member-access": ERROR,
			// Avoid returning `any`.
			"@typescript-eslint/no-unsafe-return": ERROR,
			// Don't just leave expressions lying around! Use them!
			"@typescript-eslint/no-unused-expressions": ERROR,
			// TS already takes care of this.
			"@typescript-eslint/no-unused-vars": OFF,
			// Avoid using something before is defined.
			"@typescript-eslint/no-use-before-define": ERROR,
			// When working with classes, let's not define useless constructors.
			"@typescript-eslint/no-useless-constructor": ERROR,
			// Disallow empty exports that don't change anything in a module file.
			"@typescript-eslint/no-useless-empty-export": ERROR,
			// Use ES imports!
			"@typescript-eslint/no-var-requires": ERROR,
			// Use `as const` instead of writing `Readonly<Type>`.
			"@typescript-eslint/prefer-as-const": ERROR,
			// If you'll use a `for` loop on an array, use `for/of`.
			"@typescript-eslint/prefer-for-of": ERROR,
			// Cleaner than the alternative.
			"@typescript-eslint/prefer-function-type": ERROR,
			// Avoid `indexOf` and use `includes` instead.
			"@typescript-eslint/prefer-includes": ERROR,
			// Use `namespace` instead of `module` (old TS).
			"@typescript-eslint/prefer-namespace-keyword": ERROR,
			// Use `??` instead of a ternary.
			"@typescript-eslint/prefer-nullish-coalescing": ERROR,
			// Use `?.` instead of checking every property.
			"@typescript-eslint/prefer-optional-chain": ERROR,
			// In classes, private members should be read only.
			"@typescript-eslint/prefer-readonly": ERROR,
			// Handled by `functional/prefer-immutable-types`.
			"@typescript-eslint/prefer-readonly-parameter-types": OFF,
			// Use `startsWith` and `endsWith` instead of the string index.
			"@typescript-eslint/prefer-string-starts-ends-with": ERROR,
			// Use `@ts-expect-error` instead of `@ts-ignore`.
			"@typescript-eslint/prefer-ts-expect-error": ERROR,
			// Handled by Prettier
			"@typescript-eslint/quotes": OFF,
			// Always use `Array.prototype.sort` with a comparing function.
			"@typescript-eslint/require-array-sort-compare": ERROR,
			// Use `await` if you are using `async`.
			"@typescript-eslint/require-await": ERROR,
			// Use `+` with the same type (`number` or `string`).
			"@typescript-eslint/restrict-plus-operands": ERROR,
			// Only use strings or numbers inside template expressions.
			"@typescript-eslint/restrict-template-expressions": [
				ERROR,
				{ allowNumber: true },
			],
			// Enforce consistent use of semicolons after statements.
			"@typescript-eslint/semi": [ERROR, "always"],
			// Handled by Prettier
			"@typescript-eslint/space-before-function-paren": OFF,
			// Comparisons should be applied to booleans only (not falsy/truthy).
			"@typescript-eslint/strict-boolean-expressions": ERROR,
			// If you'll use switch, make sure to cover every possible value.
			"@typescript-eslint/switch-exhaustiveness-check": ERROR,
			// Old TS.
			"@typescript-eslint/triple-slash-reference": ERROR,
			// Spacing with types (should be handled by Prettier).
			"@typescript-eslint/type-annotation-spacing": ERROR,
			// Bind stuff before using it.
			"@typescript-eslint/unbound-method": ERROR,
			// Unify signatures instead of overloading.
			"@typescript-eslint/unified-signatures": ERROR,
		},
	}),
]);
