/**
 * Description can be a string or an object, this gets it in either format.
 *
 * @category Internal
 * @param description Description to get.
 * @returns Description.
 */
export const getDescription = (
	description?: string | { readonly value: string },
) => (typeof description === "string" ? description : description?.value ?? "");
