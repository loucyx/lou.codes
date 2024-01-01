/**
 * Add indent to generated code.
 *
 * @category Internal
 * @param options Indent level and string to be indented.
 * @returns Indented string.
 */
export const addIndent = (options: {
	readonly indent: number;
	readonly string: string;
}) =>
	options.string
		.split("\n")
		.map(line => `${`\t`.repeat(options.indent)}${line}`)
		.map(line => line.trimEnd())
		.join("\n");
