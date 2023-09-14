import type { Tests } from "@vangware/test";
import { greet } from "../src/index.js";

export default [
	{
		given: "a name",
		must: "greet that name",
		received: () => greet("Vangware"),
		wanted: () => "Hello, Vangware!",
	},
] satisfies Tests<string>;
