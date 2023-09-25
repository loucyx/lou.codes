import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import webCustomData from "vscode-html-languageservice/lib/esm/languageFacts/data/webCustomData.js";
import { generateAttributesType } from "./generateAttributesType.js";
import { generateTagType } from "./generateTagType.js";

const {
	htmlData: { tags = [], globalAttributes },
} = webCustomData;

writeFile(
	resolve(
		fileURLToPath(new URL(".", import.meta.url)),
		"../HTMLElementTagGlobalAttributes.ts",
	),
	`/* eslint-disable id-blacklist, max-lines */
/* This file is auto-generated. Don't edit manually */

import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Global HTML attributes.
 *
 * @category HTML
 * @remarks
 * If you need the type of all HTML attributes, this is it.
 * @example
 * \`\`\`typescript
 * const getAttribute = (attribute: keyof HTMLElementTagGlobalAttributes) => // ...
 * \`\`\`
 * @see {@link ReadOnlyRecord}
 */
export type HTMLElementTagGlobalAttributes = ReadOnlyRecord<string, string> & {${generateAttributesType(
		{
			attributes: globalAttributes as NonNullable<
				typeof globalAttributes
			>,
			indent: 1,
		},
	)}};
`,
)
	.then(() => console.log("HTMLElementTagGlobalAttributes.ts updated."))
	.catch(console.error);

writeFile(
	resolve(
		fileURLToPath(new URL(".", import.meta.url)),
		"../HTMLElementTagAttributeMap.ts",
	),
	`/* eslint-disable id-blacklist, max-lines */
/* This file is auto-generated. Don't edit manually */

import type { HTMLElementTagGlobalAttributes } from "./HTMLElementTagGlobalAttributes.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Map of HTML element tag attributes.
 *
 * @category HTML
 * @remarks
 * If you need the type of the HTML attributes of an HTML element, this is it.
 * @example
 * \`\`\`typescript
 * const getAttribute =
 * 	<Tag extends keyof HTMLElementTagAttributeMap>(tag: Tag) =>
 * 	(attribute: keyof HTMLElementTagAttributeMap[Tag]) => // ...
 * \`\`\`
 * @see {@link HTMLElementTagGlobalAttributes}
 * @see {@link ReadOnlyRecord}
 */
export type HTMLElementTagAttributeMap = ReadOnlyRecord<
	\`\${string}-\${string}\`,
	HTMLElementTagGlobalAttributes
> & {${[...tags]
		.sort((tagA, tagB) => tagA.name.localeCompare(tagB.name))
		.map(tag =>
			generateTagType({
				...tag,
				attributes: tag.attributes,
				indent: 1,
			}),
		)
		.join("")}};
`,
	{ encoding: "utf-8" },
)
	.then(() => console.log("HTMLElementTagAttributeMap.ts updated."))
	.catch(console.error);
