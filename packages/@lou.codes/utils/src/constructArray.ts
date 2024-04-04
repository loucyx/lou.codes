import type { ReadOnlyArray, Unbound } from "@lou.codes/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Array()`.
 *
 * @category Classes
 */
export const constructArray = construct(Array) as {
	// eslint-disable-next-line functional/prefer-readonly-type
	<Item>(length: number): Unbound<Array<Item>>;
	// eslint-disable-next-line functional/prefer-readonly-type
	<Items extends ReadOnlyArray>(
		...items: Items
	): Unbound<Array<Items[number]>>;
};
