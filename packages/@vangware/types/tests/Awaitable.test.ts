import type { Awaitable } from "../src/Awaitable.js";
import type { ReadOnlyArray } from "../src/ReadOnlyArray.js";

export type AwaitableString = Awaitable<string>;

export const promisedValue: AwaitableString = Promise.resolve("🟢");
export const plainValue: AwaitableString = "🟩";

// @ts-expect-error Type has to match (and this isn't a `string`).
export const wrongPromise: AwaitableString = Promise.resolve(13);

// @ts-expect-error Type has to match (and this isn't a `string`).
export const wrongPlain: AwaitableString = 13;

export const testValueFunction = (maybePromise: AwaitableString) =>
	Promise.resolve(maybePromise)
		// `value` is a `string` as expected.
		.then(value => value.charAt(0))
		// eslint-disable-next-line no-console
		.catch(console.error);

export const testArrayFunction = (
	promiseArray: ReadOnlyArray<AwaitableString>,
) =>
	Promise.all(promiseArray)
		// `item` is a `string` as expected.
		.then(plainArray => plainArray.map(item => item.charAt(0)))
		// eslint-disable-next-line no-console
		.catch(console.error);
