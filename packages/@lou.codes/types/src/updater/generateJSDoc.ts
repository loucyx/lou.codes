import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type { ITagData } from "vscode-html-languageservice/lib/esm/htmlLanguageTypes.js";
import type { ReadOnly } from "../ReadOnly.js";
import { getDescription } from "./getDescription.js";
import { normalizeJSDocMarkdown } from "./normalizeJSDocMarkdown.js";

/**
 * Generate formatted JSDoc.
 *
 * @category Internal
 * @param options Description and references to be formatted.
 * @returns Formatted JSDoc.
 */
export const generateJSDoc = (options: {
	readonly description?: string | { readonly value: string };
	readonly references?: ReadOnly<ITagData["references"]>;
}) =>
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
