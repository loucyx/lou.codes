/**
 * Increases a level to all titles in the given markdown
 * @param {string} markdown
 * @returns
 */
export const incrementHeadingLevels = markdown =>
	markdown.replaceAll(/(?<level>#|##|###|####) (?<title>.+)/gu, "#$1 $2");
