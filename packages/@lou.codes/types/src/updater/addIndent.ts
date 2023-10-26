/**
 * Add indent to generated code.
 *
 * @category Internal
 * @param options Indent level and string to be indented.
 * @returns Indented string.
 */
export const addIndent = ({
	indent,
	string,
}: {
	readonly indent: number;
	readonly string: string;
}) =>
	string
		.split("\n")
		.map(line => `${`\t`.repeat(indent)}${line}`)
		.map(line => line.trimEnd())
		.join("\n");
