/**
 * Prettier configuration.
 * @see [Prettier options](https://prettier.io/docs/en/options.html)
 */
export default Object.freeze(
	/** @type {const} @satisfies {import("prettier").Options} */ ({
		// Avoid parentheses around a sole arrow function parameter.
		arrowParens: "avoid",
		// Put the `>` of a multi-line HTML like in a new line.
		bracketSameLine: false,
		// Print spaces between brackets in object literals.
		bracketSpacing: true,
		// Control whether Prettier formats quoted code embedded in the file.
		embeddedLanguageFormatting: "auto",
		// Unix EOL.
		endOfLine: "lf",
		// Strict whitespace in HTML.
		htmlWhitespaceSensitivity: "strict",
		// JSX should use double quote.
		jsxSingleQuote: false,
		// Print width is ideal at 80 characters.
		printWidth: 80,
		// Wrap text to fit the print width.
		proseWrap: "always",
		// Add quotes around properties of object if needed.
		quoteProps: "as-needed",
		// Print semicolons at the ends of statements.
		semi: true,
		// Shows multiple attributes per line in HTML, Vue and JSX.
		singleAttributePerLine: false,
		// Use double quotes.
		singleQuote: false,
		// Tab width at 4 is ideal.
		tabWidth: 4,
		// Add trailing commas to make edition easier and diffing better.
		trailingComma: "all",
		// Obviously use tabs.
		useTabs: true,
		// Indent code in Vue files.
		vueIndentScriptAndStyle: true,
	}),
);
