import eslintPluginPreferArrow from "eslint-plugin-prefer-arrow";
import { ERROR } from "./levels.js";

/**
 * ESLint `prefer-arrow` rules.
 * @see [eslint-plugin-prefer-arrow](https://npm.im/eslint-plugin-prefer-arrow)
 */
export default Object.freeze(
	/** @satisfies {import("eslint").Linter.FlatConfig} */ ({
		plugins: { "prefer-arrow": eslintPluginPreferArrow },
		rules: {
			"prefer-arrow/prefer-arrow-functions": [
				ERROR,
				{ classPropertiesAllowed: true },
			],
		},
	}),
);
