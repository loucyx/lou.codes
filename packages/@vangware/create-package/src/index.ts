#!/usr/bin/env node

import { bold } from "@vangware/ansi";
import { question } from "@vangware/prompts";
import { createInterface } from "node:readline/promises";
import { copyBase } from "./copyBase.js";
import { copyTemplates } from "./copyTemplates.js";
import { createDirectory } from "./createDirectory.js";
import { doneMessage } from "./doneMessage.js";
import { getPackageConfiguration } from "./getPackageVersion.js";
import { gitIgnoreFix } from "./gitIgnoreFix.js";
import { hasValidLength } from "./validations/hasValidLength.js";
import { isValidPackageName } from "./validations/isValidPackageName.js";

const readlineInterface = createInterface({
	input: process.stdin,
	output: process.stdout,
});
const createQuestion = question(readlineInterface);

export default getPackageConfiguration()
	.then(
		packageConfiguration =>
			(
				// eslint-disable-next-line no-console
				console.log(
					bold`@vangware/create-package v${packageConfiguration.version}\n`,
				),
				packageConfiguration
			),
	)
	.then(packageConfiguration =>
		createQuestion({
			format: name => name.trim().toLocaleLowerCase("en-US"),
			query: bold`Name:`,
			retry: true,
			validate: isValidPackageName,
		})
			.then(name =>
				createDirectory(name)
					.then(copyBase(name))
					.then(gitIgnoreFix(name))
					.then(_ =>
						createQuestion({
							format: (description: string) => description.trim(),
							query: bold`Description:`,
							retry: true,
							validate: hasValidLength(1)(58),
						}),
					)
					.then(description =>
						copyTemplates({
							description,
							name,
							packageConfiguration,
						}),
					),
			)
			.then(doneMessage)
			// eslint-disable-next-line no-console
			.then(console.log)
			// eslint-disable-next-line no-console
			.catch(console.error)
			.finally(() => readlineInterface.close()),
	);
