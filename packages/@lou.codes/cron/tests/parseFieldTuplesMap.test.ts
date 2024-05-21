import { iterableToArray } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { Maybe, ReadOnlyArray } from "@lou.codes/types";
import type { Field } from "../src/Field.js";
import { parseFieldTuplesMap } from "../src/parseFieldTuplesMap.js";

/* X
 * parseFieldTuplesMap([["example", "*"]]); // [["example", "*"]]
 * parseFieldTuplesMap([["example", "13"]]); // [["example", 13]]
 * parseFieldTuplesMap([["example", "10,11,13"]]); // [["example", [10, 11, 13]]]
 * parseFieldTuplesMap([["example", "1-10"]]); // [["example", { from: 1, to: 10 }]]
 */
export const parseFieldTuplesMapTests = [
	{
		given: "tuple of minute and *",
		must: "return parsed tuple",
		received: () => iterableToArray(parseFieldTuplesMap([["minute", "*"]])),
		wanted: () => [["minute", "*"]],
	},
	{
		given: "tuple of minute and 13",
		must: "return parsed tuple",
		received: () =>
			iterableToArray(parseFieldTuplesMap([["minute", "13"]])),
		wanted: () => [["minute", 13]],
	},
	{
		given: "tuple of minute and 10,11,13",
		must: "return parsed tuple",
		received: () =>
			iterableToArray(parseFieldTuplesMap([["minute", "10,11,13"]])),
		wanted: () => [["minute", [10, 11, 13]]],
	},
	{
		given: "tuple of minute and 13",
		must: "return parsed tuple",
		received: () =>
			iterableToArray(parseFieldTuplesMap([["minute", "1-10"]])),
		wanted: () => [["minute", { from: 1, to: 10 }]],
	},
] satisfies Tests<
	ReadOnlyArray<readonly [name: string, field: Maybe<Field<number>>]>
>;
