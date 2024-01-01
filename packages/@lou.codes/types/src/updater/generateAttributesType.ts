import { EMPTY_STRING } from "@lou.codes/constants";
import type { IAttributeData } from "vscode-html-languageservice/lib/esm/htmlLanguageTypes.js";
import type { ReadOnlyArray } from "../ReadOnlyArray.js";
import { addIndent } from "./addIndent.js";
import { generateJSDoc } from "./generateJSDoc.js";

/**
 * Generate attributes type.
 *
 * @category Internal
 * @param options Attributes and indent level.
 * @returns Attributes type.
 */
export const generateAttributesType = (options: {
	readonly attributes: ReadOnlyArray<IAttributeData>;
	readonly indent: number;
}) =>
	addIndent({
		indent: options.indent,
		string: options.attributes
			.map(
				attribute => `${generateJSDoc(attribute)}readonly ${
					attribute.name.includes("-") ?
						`"${attribute.name}"`
					:	attribute.name
				}?: string;
`,
			)
			.join(EMPTY_STRING),
	});
