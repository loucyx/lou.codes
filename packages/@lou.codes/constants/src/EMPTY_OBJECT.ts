import { createObject } from "./createObject.js";
import { freeze } from "./Object.js";

/**
 * Empty read only object.
 */
export const EMPTY_OBJECT = freeze(createObject());
