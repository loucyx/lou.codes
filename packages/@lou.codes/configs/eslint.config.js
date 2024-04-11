import { coreRules } from "./rules/core.js";
import { functionalRules } from "./rules/functional.js";
import { importRules } from "./rules/import.js";
import { preferArrowFunctionsRules } from "./rules/prefer-arrow-functions.js";
import { prettierRules } from "./rules/prettier.js";
import { reactRules } from "./rules/react.js";
import { typescriptRules } from "./rules/typescript.js";
import { unicornRules } from "./rules/unicorn.js";

/**
 * ESLint configuration.
 * @see [ESLint configuration](https://eslint.org/docs/latest/use/configure/)
 */
// eslint-disable-next-line import/no-default-export
export default /** @type {const} @satisfies {ReadonlyArray<import("eslint").Linter.FlatConfig>} */ ([
	// Base rules
	coreRules,
	typescriptRules,
	// Da rest
	functionalRules,
	importRules,
	preferArrowFunctionsRules,
	prettierRules,
	reactRules,
	unicornRules,
]);
