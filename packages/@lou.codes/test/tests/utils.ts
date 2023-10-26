import type { IsomorphicIterable, ReadOnlyArray } from "@lou.codes/types";

export const iterableToArray = async <Item>(
	iterable: IsomorphicIterable<Item>,
) => {
	const output: Array<Item> = [];

	// eslint-disable-next-line functional/no-loop-statements
	for await (const item of iterable) {
		// eslint-disable-next-line functional/immutable-data
		void output.push(item);
	}

	return output as ReadOnlyArray<Item>;
};
