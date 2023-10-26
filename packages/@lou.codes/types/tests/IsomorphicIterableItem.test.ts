import type { IsomorphicIterable } from "../src/IsomorphicIterable.js";
import type { IsomorphicIterableItem } from "../src/IsomorphicIterableItem.js";

type NumberIterable = IsomorphicIterable<number>;

export const array: NumberIterable = [1, 2, 3];
export const arrayItem: IsomorphicIterableItem<typeof array> = 1;

export const object: NumberIterable = {
	*[Symbol.iterator]() {
		yield 1;
	},
};
export const objectItem: IsomorphicIterableItem<typeof object> = 1;

export const iterableFunction: NumberIterable = (function* () {
	yield 1;
})();
export const iterableFunctionItem: IsomorphicIterableItem<
	typeof iterableFunction
> = 1;

export const asyncObject: NumberIterable = {
	async *[Symbol.asyncIterator]() {
		yield await Promise.resolve(1);
	},
};
export const asyncObjectItem: IsomorphicIterableItem<typeof asyncObject> = 1;

export const asyncIterableFunction: NumberIterable = (async function* () {
	yield await Promise.resolve(1);
})();
export const asyncIterableFunctionItem: IsomorphicIterableItem<
	typeof asyncIterableFunction
> = 1;

// @ts-expect-error Iterable item should be of number type
export const wrongArrayItem: IsomorphicIterableItem<typeof array> = "1";
