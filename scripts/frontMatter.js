import { stringify } from "yaml";
import { NON_BROWSER_SCRIPT } from "./constants.js";
import { packageNameToTitle } from "./packageNameToTitle.js";

/**
 * @param {{
 * 	readonly description: string;
 * 	readonly isModule: boolean;
 * 	readonly title: string;
 * }} options
 */
export const frontMatter = ({ description, isModule = false, title }) => {
	const camelCaseTitle = title
		.replace("@lou.codes/", "")
		.replaceAll(/(?<hyphenLetter>-.)/gu, hyphenLetter =>
			hyphenLetter.replace("-", "").toLocaleUpperCase(),
		);

	return `---
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
											${camelCaseTitle} => (
												Object.assign(globalThis, { ${camelCaseTitle} }),
												console.log("${title} loaded in globalThis.${camelCaseTitle}")
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
		sidebar: {
			label: `${description.split(" ")[0]} ${packageNameToTitle(title)}`,
		},
		tableOfContents: { maxHeadingLevel: isModule ? 4 : 3 },
		title: `${packageNameToTitle(title)} Reference`,
	},
	{ indent: 4 },
)}
---`;
};
