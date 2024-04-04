import type { ReadOnly, Unbound } from "@lou.codes/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Date()`.
 *
 * @category Classes
 */
export const constructDate = construct(Date) as (
	date?: ReadOnly<Date> | number | string,
) => Unbound<Date>;
