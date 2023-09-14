import type { PackageConfiguration } from "./PackageConfiguration.js";

export type Answers = {
	/**
	 * Name of the package to create.
	 */
	readonly name: string;

	/**
	 * Description of the package to create.
	 */
	readonly description: string;

	/**
	 * `package.json` configuration from `@vangware/create-package` passed down
	 * to get stuff like `devDependencies`, `engines` and so on.
	 */
	readonly packageConfiguration: PackageConfiguration;
};
