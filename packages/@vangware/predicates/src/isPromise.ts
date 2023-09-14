import { isInstanceOf } from "./isInstanceOf.js";

/**
 * `instanceof Promise` alias.
 *
 * @category Objects
 * @example
 * ```typescript
 * isPromise(new Promise()); // true
 * isPromise((async () => {})()); // true
 * isPromise(fetch("https://vangware.com")); // true
 * isPromise(Promise.resolve("Vangware")); // true
 * isPromise("Vangware"); // false
 * ```
 * @returns `true` if the given value is an instance of `Promise`, `false` otherwise.
 */
export const isPromise = isInstanceOf(Promise);
