import type { Tests } from "@vangware/test";
import { awaitableHandler } from "../src/awaitableHandler.js";

const double = (value: number) => value * 2;
const maybePromiseNumber = awaitableHandler(double);

export default [
	{
		given: "a maybePromiseHandler that doubles and a non promise number",
		must: "return the result",
		received: () => maybePromiseNumber(2),
		wanted: () => 4,
	},
	{
		given: "a maybePromiseHandler that doubles and a promised number",
		must: "return a promise with the result",
		received: () => maybePromiseNumber(Promise.resolve(2)),
		wanted: () => 4,
	},
] satisfies Tests<number>;
