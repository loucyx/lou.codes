import { isType } from "./isType.js";

/**
 * `typeof` "function" alias.
 *
 * @category Objects
 * @example
 * ```typescript
 * isFunction(() => {}); // true
 * isFunction(function() {}); // true
 * isFunction(function *() {}); // true
 * isFunction(class {}); // true
 * isFunction(null); // false
 * ```
 * @returns `true` if the given value is a function, `false` otherwise.
 */
export const isFunction = isType("function");
