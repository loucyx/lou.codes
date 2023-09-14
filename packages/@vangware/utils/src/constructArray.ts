import type { ReadOnlyArray } from "@vangware/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Array()`.
 *
 * @category Classes
 */
export const constructArray = construct(Array) as {
	// eslint-disable-next-line functional/prefer-readonly-type
	<Item>(length: number): Array<Item>;
	// eslint-disable-next-line functional/prefer-readonly-type
	<Items extends ReadOnlyArray>(...items: Items): Array<Items[number]>;
};
