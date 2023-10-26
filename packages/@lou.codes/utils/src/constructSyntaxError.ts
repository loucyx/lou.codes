import { construct } from "./construct.js";

/**
 * Functional alias for `new SyntaxError()`.
 *
 * @category Classes
 */
export const constructSyntaxError = construct(SyntaxError);
