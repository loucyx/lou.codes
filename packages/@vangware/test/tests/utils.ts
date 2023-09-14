import type { IsomorphicIterable, ReadOnlyArray } from "@vangware/types";

export const iterableToArray = async <Item>(
	iterable: IsomorphicIterable<Item>,
) => {
	const output: Array<Item> = [];

	// eslint-disable-next-line functional/no-loop-statements
	for await (const item of iterable) {
		// eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
		output.push(item);
	}

	return output as ReadOnlyArray<Item>;
};
