#! /usr/bin/env node

import { updatePackageSize } from "./updatePackageSize.js";

void Promise.all(
	[
		"@lou.codes/ansi",
		"@lou.codes/constants",
		"@lou.codes/cron",
		"@lou.codes/diff",
		"@lou.codes/iterables",
		"@lou.codes/notify",
		"@lou.codes/parsers",
		"@lou.codes/predicates",
		"@lou.codes/prompts",
		"@lou.codes/test",
		"@lou.codes/types",
		"@lou.codes/utils",
		"preact-pair",
		"react-pair",
		"window-open-promise",
	].map(updatePackageSize),
)
	// eslint-disable-next-line no-console
	.then(() => console.log("All Done"))
	// eslint-disable-next-line no-console, @typescript-eslint/use-unknown-in-catch-callback-variable
	.catch(console.error);
