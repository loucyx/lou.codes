#! /usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { formatPairedDocs } from "./formatPairedDocs.js";

void formatPairedDocs()
	.then(formattedPairs =>
		Promise.all(
			formattedPairs.map(([path, content]) =>
				mkdir(dirname(path), { recursive: true }).then(() =>
					writeFile(path, content, { encoding: "utf8" }),
				),
			),
		),
	)
	// eslint-disable-next-line no-console
	.then(() => console.log("Docs written"))
	// eslint-disable-next-line no-console, @typescript-eslint/use-unknown-in-catch-callback-variable
	.catch(console.error);
