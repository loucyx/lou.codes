import type { ReadOnlyCollection } from "../src/ReadOnlyCollection.js";

export const readOnlyArray: ReadOnlyCollection = [1, 2, 3];
export const readOnlyObject: ReadOnlyCollection = { foo: "bar" };

// @ts-expect-error ReadOnlyCollection is readonly.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
void readOnlyArray.push(4);

// @ts-expect-error ReadOnlyCollection can't be a primitive
export const readOnlyNumber: ReadOnlyCollection = 1;

// @ts-expect-error ReadOnlyCollection can't be a primitive
export const readOnlyString: ReadOnlyCollection = 1n;
