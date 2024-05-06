import { asyncIterator } from "@lou.codes/constants/Symbol.js";
import { set } from "@lou.codes/utils";

/**
 * Set `Symbol.asyncIterator` to the given value to the given object.
 *
 * @category Internal
 * @example
 * ```typescript
 * setAsyncIterator("🟢")({ foo: "bar" }); // { [Symbol.asyncIterator]: "🟢", foo: "bar" }
 * ```
 * @returns Curried function with `key` in context.
 */
export const setAsyncIterator = set(asyncIterator);
