import { zip } from "@lou.codes/iterables";
import { FROM_NAME, TO_NAME } from "./rangeFieldNames.js";

/**
 * Zips "from" and "to".
 *
 * @category Internal
 */
export const zipRangeNames = zip([FROM_NAME, TO_NAME] as const);
