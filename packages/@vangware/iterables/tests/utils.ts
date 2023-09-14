import type { ReadOnlyArray } from "@vangware/types";

// eslint-disable-next-line @typescript-eslint/require-await
export const asyncIterateArray = async function* <Item>(
	array: ReadOnlyArray<Item>,
) {
	yield* array;
};

export const iterateArray = function* <Item>(array: ReadOnlyArray<Item>) {
	yield* array;
};
