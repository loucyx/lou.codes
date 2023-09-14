import type { Tests } from "@vangware/test";
import { isSafeInteger } from "../src/isSafeInteger.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

export default [
	{
		given: "a safe integer",
		received: () => isSafeInteger(1),
		...wantedTrue,
	},
	{
		given: "a float",
		received: () => isSafeInteger(1.5),
		...wantedFalse,
	},
	{
		given: "a negative integer",
		received: () => isSafeInteger(-1),
		...wantedTrue,
	},
	{
		given: "a negative float",
		received: () => isSafeInteger(-1.5),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
