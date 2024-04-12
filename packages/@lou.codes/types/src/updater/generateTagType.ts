import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type { ITagData } from "vscode-html-languageservice";
import { addIndent } from "./addIndent.js";
import { generateAttributesType } from "./generateAttributesType.js";
import { generateJSDoc } from "./generateJSDoc.js";
import { patchAttributes } from "./patchAttributes.js";

/**
 * Generate tag type.
 *
 * @category Internal
 * @param options Tag data and indent level.
 * @returns Tag type.
 */
export const generateTagType = (
	options: Readonly<ITagData> & { readonly indent: number },
) => {
	const typedAttributes = generateAttributesType({
		attributes: patchAttributes(options.attributes),
		indent: options.indent,
	});

	return addIndent({
		indent: options.indent,
		string: `${generateJSDoc(options)}readonly ${options.name}: HTMLElementTagGlobalAttributes${
			typedAttributes ? ` & {${typedAttributes}}` : EMPTY_STRING
		};
`,
	});
};
