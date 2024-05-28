import { iterableToArray } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { Maybe, ReadOnlyArray } from "@lou.codes/types";
import type { RangeField } from "../src/RangeField.js";
import { parseListMap } from "../src/parseListMap.js";

export const parseListMapTests = [
	{
		given: "a list of valid and invalid values",
		must: "return parsed list",
		received: () =>
			iterableToArray(
				parseListMap(["1", "05", "13", "5-13", "13-13", "13-5", "99"]),
			),
		wanted: () => [1, 5, 13, { from: 5, to: 13 }, 13, undefined, undefined],
	},
] satisfies Tests<ReadOnlyArray<Maybe<RangeField<number> | number>>>;
