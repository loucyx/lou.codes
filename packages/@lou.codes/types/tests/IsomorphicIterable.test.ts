import type { IsomorphicIterable } from "../src/IsomorphicIterable.js";

type NumberIterable = IsomorphicIterable<number>;

export const array: NumberIterable = [1, 2, 3];
export const object: NumberIterable = {
	*[Symbol.iterator]() {
		yield 1;
	},
};
export const iterableFunction: NumberIterable = (function* () {
	yield 1;
})();
export const asyncObject: NumberIterable = {
	async *[Symbol.asyncIterator]() {
		yield await Promise.resolve(1);
	},
};
export const asyncIterableFunction: NumberIterable = (async function* () {
	yield await Promise.resolve(1);
})();

// @ts-expect-error Iterable should be of number type
export const wrongArray: NumberIterable = ["foo", "bar"];

// @ts-expect-error Only iterables are valid
export const nonIterable: NumberIterable = { foo: 1 };
