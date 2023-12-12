import type { Tests } from "@lou.codes/test";
import { greet } from "../src/index.js";

export const greetTests = [
	{
		given: "a name",
		must: "greet that name",
		received: () => greet("Lou"),
		wanted: () => "Hello, Lou!",
	},
] satisfies Tests<string>;
