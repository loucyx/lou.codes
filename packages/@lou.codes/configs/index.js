import typedocConfig from "./typedoc.json" assert { type: "json" };
import typescriptConfig from "./typescript.config.json" assert { type: "json" };

export { default as changesetsConfig } from "./changelog.cjs";
export { default as eslintConfig } from "./eslint.config.js";
export { default as prettierConfig } from "./prettier.config.js";
export { default as stylelintConfig } from "./stylelint.config.js";
export { typedocConfig, typescriptConfig };
