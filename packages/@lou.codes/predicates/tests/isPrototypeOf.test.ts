import type { Tests } from "@lou.codes/test";
import { isPrototypeOf } from "../src/isPrototypeOf.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const isPrototypeOfObject = isPrototypeOf(Object);

export const isPrototypeOfTests = [
	{
		given: "an empty object",
		received: () => isPrototypeOfObject({}),
		...wantedTrue,
	},
	{
		given: "an array",
		received: () => isPrototypeOfObject([]),
		...wantedFalse,
	},
	{
		given: "a regular expression",
		received: () => isPrototypeOfObject(/-/u),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
