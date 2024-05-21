import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import type { ListField } from "../src/ListField.js";
import { parseList } from "../src/parseList.js";

export const parseListTests = [
	{
		given: "a list with 10, 11 and 13",
		must: "return parsed list",
		received: () => parseList("10,11,13"),
		wanted: () => [10, 11, 13],
	},
] satisfies Tests<Maybe<ListField<number>>>;
