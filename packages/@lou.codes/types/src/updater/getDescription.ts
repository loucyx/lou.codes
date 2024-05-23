import type { ITagData } from "vscode-html-languageservice";
import type { Just } from "../Just.js";

/**
 * Description can be a string or an object, this gets it in either format.
 *
 * @category Internal
 * @param description Description to get.
 * @returns Description.
 */
export const getDescription = (
	description: Just<Readonly<ITagData["description"]>>,
) => (typeof description === "string" ? description : description.value);
