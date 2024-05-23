#! /usr/bin/env node

import { exit } from "node:process";
import { updatePackageSize } from "./updatePackageSize.js";

void Promise.allSettled(
	[
		"@lou.codes/ansi",
		"@lou.codes/constants",
		"@lou.codes/cron",
		"@lou.codes/diff",
		"@lou.codes/iterables",
		"@lou.codes/math",
		"@lou.codes/notify",
		"@lou.codes/parsers",
		"@lou.codes/predicates",
		"@lou.codes/prompts",
		"@lou.codes/test",
		"@lou.codes/types",
		"@lou.codes/utils",
		"functional-expression",
		"preact-pair",
		"react-pair",
		"window-open-promise",
	].map(updatePackageSize),
)
	.then(results => {
		const rejected = results.filter(
			/**
			 * @param result
			 * @returns {result is (Omit<PromiseRejectedResult, "reason"> & { reason: string })}
			 */ result => result.status === "rejected",
		);

		return rejected.length === 0 ?
				// eslint-disable-next-line no-console
				console.log("All Done")
			:	Promise.reject(
					`Updated ${rejected.map(result => result.reason).join(", ")}. Please commit the changes.`,
				);
	})
	// eslint-disable-next-line no-console, @typescript-eslint/use-unknown-in-catch-callback-variable
	.catch(error => (console.error(error), exit(1)));
