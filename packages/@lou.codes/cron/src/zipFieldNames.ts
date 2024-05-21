import { zip } from "@lou.codes/iterables";
import { fieldNamesTuple } from "./fieldNamesTuple.js";

/**
 * Zips field names to given array.
 *
 * @category Internal
 * @see {@link fieldNamesTuple}
 */
export const zipFieldNames = zip(fieldNamesTuple);
