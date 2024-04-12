import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type { ITagData } from "vscode-html-languageservice";
import { getDescription } from "./getDescription.js";
import { normalizeJSDocMarkdown } from "./normalizeJSDocMarkdown.js";

/**
 * Generate formatted JSDoc.
 *
 * @category Internal
 * @param options Description and references to be formatted.
 * @returns Formatted JSDoc.
 */
export const generateJSDoc = (
	options: Readonly<Pick<ITagData, "description" | "references">>,
) =>
	options.description === undefined ?
		"\n"
	:	`
/**
 * ${normalizeJSDocMarkdown(getDescription(options.description))}${
		options.references ?
			`
 * 
 * ---
 *
 * **References**
 * 
 * ${options.references
		.map(reference => `@see [${reference.name}](${reference.url})`)
		.join("\n * ")}`
		:	EMPTY_STRING
 }
 */
`;
