import type { Test } from "@vangware/test";
import { bind } from "../src/bind.js";
import { construct } from "../src/construct.js";

const instance = construct(
	// eslint-disable-next-line functional/no-classes, @typescript-eslint/no-extraneous-class
	class {
		public readonly works: boolean = true;

		// eslint-disable-next-line functional/no-this-expressions
		public readonly test = () => this.works;
	},
)();

export default {
	given: "a binded function",
	must: "return scoped value",
	received: bind(instance)(instance.test),
	wanted: () => true,
} satisfies Test<boolean>;
