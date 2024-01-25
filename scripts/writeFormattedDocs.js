#! /usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { ASTRO_TARGET } from "./constants.js";
import { formatPairedDocs } from "./formatPairedDocs.js";

void mkdir(ASTRO_TARGET, { recursive: true })
	.then(() =>
		formatPairedDocs().then(formattedPairs =>
			Promise.all(
				formattedPairs.map(([path, content]) =>
					writeFile(path, content, { encoding: "utf8" }),
				),
			),
		),
	)
	// eslint-disable-next-line no-console
	.then(() => console.log("Docs written"))
	// eslint-disable-next-line no-console
	.catch(console.error);
