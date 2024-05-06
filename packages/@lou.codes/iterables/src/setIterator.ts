import { iterator } from "@lou.codes/constants/Symbol.js";
import { set } from "@lou.codes/utils";

/**
 * Set `Symbol.iterator` to the given value to the given object.
 *
 * @category Internal
 * @example
 * ```typescript
 * setIterator("🟢")({ foo: "bar" }); // { [Symbol.iterator]: "🟢", foo: "bar" }
 * ```
 * @returns Curried function with `key` in context.
 */
export const setIterator = set(iterator);
