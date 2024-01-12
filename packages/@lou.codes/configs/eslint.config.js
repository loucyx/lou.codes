import { coreRules } from "./rules/core.js";
import { functionalRules } from "./rules/functional.js";
import { importRules } from "./rules/import.js";
import { preferArrowRules } from "./rules/prefer-arrow.js";
import { prettierRules } from "./rules/prettier.js";
import { reactRules } from "./rules/react.js";
import { typescriptRules } from "./rules/typescript.js";
import { unicornRules } from "./rules/unicorn.js";

/**
 * ESLint configuration.
 */
// eslint-disable-next-line import/no-default-export
export default /** @type {const} @satisfies {ReadonlyArray<import("eslint").Linter.FlatConfig>} */ ([
	coreRules,
	...functionalRules,
	importRules,
	preferArrowRules,
	prettierRules,
	reactRules,
	typescriptRules,
	unicornRules,
]);
