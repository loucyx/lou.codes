import { isInstanceOf } from "./isInstanceOf.js";

/**
 * `instanceof Promise` alias.
 *
 * @category Objects
 * @example
 * ```typescript
 * isPromise(new Promise()); // true
 * isPromise((async () => {})()); // true
 * isPromise(fetch("https://lou.codes")); // true
 * isPromise(Promise.resolve("Lou")); // true
 * isPromise("Lou"); // false
 * ```
 * @returns `true` if the given value is an instance of `Promise`, `false` otherwise.
 */
export const isPromise = isInstanceOf(Promise);
