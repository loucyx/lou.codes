import { freeze } from "./Object.js";

/**
 * Empty read only array.
 */
// FIXME: ESLint thinks `readonly []` and `readonly never[]` are the same. They aren't. Remove this once they fix that.
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
export const EMPTY_ARRAY = freeze([]) as readonly [];
