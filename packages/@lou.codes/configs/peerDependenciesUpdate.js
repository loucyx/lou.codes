#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { cwd, exit } from "node:process";

/** @typedef {import("./package.json")} PackageJSON */
/** @typedef {[keyof PackageJSON["peerDependencies"], PackageJSON["peerDependencies"][keyof PackageJSON["peerDependencies"]]]} PackageJSONEntry */

const packageJSONPath = resolve(cwd(), "package.json");

void readFile(packageJSONPath, "utf8")
	.then(JSON.parse)
	.then(
		/** @param {PackageJSON} packageJSON */ packageJSON =>
			writeFile(
				packageJSONPath,
				`${JSON.stringify(
					Object.fromEntries(
						Object.entries(packageJSON).map(([key, value]) => [
							key,
							key === "peerDependencies" ?
								Object.fromEntries(
									/** @type {ReadonlyArray<PackageJSONEntry>} */ (
										Object.entries(
											packageJSON.peerDependencies,
										)
									).map(([peerDependency, version]) => [
										peerDependency,
										`${packageJSON.devDependencies[
											peerDependency
										]
											.split(".")
											.map((part, index) =>
												(
													index >
													(version.startsWith("^") ? 0
													:	1)
												) ?
													"0"
												:	part,
											)
											.join(".")}`,
									]),
								)
							:	value,
						]),
					),
					undefined,
					"\t",
				)}\n`,
			),
	)
	.then(() => exit(0))
	// eslint-disable-next-line no-console
	.catch(error => (console.error(error), exit(1)));
