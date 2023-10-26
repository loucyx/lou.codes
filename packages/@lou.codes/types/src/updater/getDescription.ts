/**
 * Description can be a string or an object, this gets it in either format.
 *
 * @category Internal
 * @param description Description to get.
 * @returns Description.
 */
export const getDescription = (
	description?: string | { readonly value: string },
	// FIXME: I hate to do this, but the original type has an undefined that is never used.
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
) => (typeof description === "string" ? description : description!.value);
