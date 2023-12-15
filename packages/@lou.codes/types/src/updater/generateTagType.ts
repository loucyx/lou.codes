import { EMPTY_STRING } from "@lou.codes/constants";
import type { ITagData } from "vscode-html-languageservice/lib/esm/htmlLanguageTypes.js";
import type { ReadOnly } from "../ReadOnly.js";
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
export const generateTagType = ({
	attributes,
	description,
	references,
	name,
	indent,
}: ReadOnly<ITagData & { indent: number }>) => {
	const typedAttributes = generateAttributesType({
		attributes: patchAttributes(attributes),
		indent,
	});

	return addIndent({
		indent,
		string: `${generateJSDoc({
			// FIXME: This is not typed correctly in vscode-html-languageservice 🤦🏻
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			description,
			references,
		})}readonly ${name}: HTMLElementTagGlobalAttributes${
			typedAttributes ? ` & {${typedAttributes}}` : EMPTY_STRING
		};
`,
	});
};
