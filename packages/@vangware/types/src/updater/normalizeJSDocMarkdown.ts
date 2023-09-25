/**
 * Markdown can have new lines and lists, this normalizes everything.
 *
 * @category Internal
 * @param markdown Markdown to normalize.
 * @returns Normalized markdown.
 */
export const normalizeJSDocMarkdown = (markdown: string) =>
	markdown
		.replaceAll("\n", "\n * ")
		.replaceAll("\n **   ", "\n * -   ")
		.replaceAll(" ", " ");
