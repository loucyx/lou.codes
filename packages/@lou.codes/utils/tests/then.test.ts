import type { Tests } from "@lou.codes/test";
import { identity } from "../src/identity.js";
import { then } from "../src/then.js";

const thenTest = then(() => "then");

export const thenTests = [
	{
		given: "a then handler that returns a string and a failing promise",
		must: "receive the error",
		// eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable
		received: () => thenTest(Promise.reject("error")).catch(identity),
		wanted: () => "error",
	},
	{
		given: "a then handler that returns a string and a successful promise",
		must: "receive the then string",
		received: () => thenTest(Promise.resolve("success")),
		wanted: () => "then",
	},
] satisfies Tests<string>;
