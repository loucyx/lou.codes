import { construct } from "./construct.js";

/**
 * Functional alias for `new ReferenceError()`.
 *
 * @category Classes
 */
export const constructReferenceError = construct(ReferenceError);
