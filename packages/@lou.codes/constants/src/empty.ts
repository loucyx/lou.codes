import { create, freeze } from "./Object.js";

/**
 * Empty read only array.
 */
export const EMPTY_ARRAY = freeze([] as const);

/**
 * Empty readonly object.
 */
export const EMPTY_OBJECT = freeze(create());

/**
 * Empty string.
 */
export const EMPTY_STRING = "";
