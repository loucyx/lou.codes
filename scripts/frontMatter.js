import { stringify } from "yaml";
import { NON_BROWSER_SCRIPT } from "./constants.js";
import { packageNameToTitle } from "./packageNameToTitle.js";
import {} from "esbuild";

/**
 * @param {{
 * 	readonly description: string;
 * 	readonly title: string;
 * }} options
 */
export const frontMatter = ({ description, title }) => `---
${stringify(
	{
		description,
		...(NON_BROWSER_SCRIPT.includes(title) ? undefined : (
			{
				head: [
					{
						attrs: { defer: true, type: "module" },
						content: `
							globalThis.addEventListener(
								"load",
								() =>
									void import("https://esm.sh/${title}?bundle")
										.then(
											library => (
												Object.assign(globalThis, library),
												console.log("${title} loaded in globalThis")
											),
										)
										.catch(() => console.error("${title} couldn't be loaded")),
							);
						`
							.split("\n")
							.map(line => line.trim())
							.join(" "),
						tag: "script",
					},
				],
			}
		)),
		title: `${packageNameToTitle(title)} Reference`,
	},
	{ indent: 4 },
)}
---`;
