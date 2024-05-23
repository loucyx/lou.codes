import { values } from "@lou.codes/constants/Object.js";
import { EMPTY_OBJECT } from "@lou.codes/constants/empty.js";
import type { IAttributeData } from "vscode-html-languageservice";
import type { Just } from "../Just.js";
import type { ReadOnlyArray } from "../ReadOnlyArray.js";
import type { ReadOnlyRecord } from "../ReadOnlyRecord.js";
import { getDescription } from "./getDescription.js";

/**
 * Patches attributes because the original `vscode-html-languageservice` data is
 * duplicated sometimes.
 *
 * @category Internal
 * @param attributes Attributes to patch.
 * @returns Patched attributes.
 */
export const patchAttributes = (attributes: ReadOnlyArray<IAttributeData>) =>
	values(
		attributes.reduce<ReadOnlyRecord<string, IAttributeData>>(
			(patchedAttributes, attribute) => ({
				...patchedAttributes,
				[attribute.name]: {
					...(patchedAttributes[attribute.name] ?
						{
							...patchedAttributes[attribute.name],
							description: `${getDescription(
								patchedAttributes[attribute.name]
									?.description as Just<
									(typeof patchedAttributes)[string]["description"]
								>,
							)}\n\n---\n\n${getDescription(
								attribute.description as Just<
									(typeof attribute)["description"]
								>,
							)}`,
						}
					:	attribute),
				} as IAttributeData,
			}),
			EMPTY_OBJECT,
		),
	).toSorted((attributeA, attributeB) =>
		attributeA.name.localeCompare(attributeB.name),
	);
