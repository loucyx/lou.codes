import { isString } from "@lou.codes/predicates";
import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { find } from "../../src/asynchronous/find.js";
import { toIterable } from "../../src/asynchronous/toIterable.js";

const findString = find<number | string>(isString);

export const findTests = [
	{
		given: "an array of numbers and strings containing search matching item",
		must: "get the first string that matches",
		received: () => findString(toIterable([0, 1, "foo", 2, "bar"])),
		wanted: () => "foo",
	},
	{
		given: "an array of numbers without search matching item",
		must: "get the first string",
		received: () => findString(toIterable([0, 1, 2])),
		wanted: () => undefined,
	},
	{
		given: "an iterable of numbers and strings containing search matching item",
		must: "get the first string that matches",
		received: () => findString(toIterable([0, 1, "foo", 2, "bar"])),
		wanted: () => "foo",
	},
	{
		given: "an iterable of numbers without search matching item",
		must: "get the first string",
		received: () => findString(toIterable([0, 1, 2])),
		wanted: () => undefined,
	},
] satisfies Tests<Maybe<number | string>>;
