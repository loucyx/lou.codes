import type { Tests } from "@vangware/test";
import { otherwise } from "../src/otherwise.js";

const otherwiseTest = otherwise(() => "otherwise");

export default [
	{
		given: "an otherwise handler that returns a string and a failing promise",
		must: "receive the otherwise string",
		received: () => otherwiseTest(Promise.reject("error")),
		wanted: () => "otherwise",
	},
	{
		given: "an otherwise handler that returns a string and a successful promise",
		must: "receive the successful result",
		received: () => otherwiseTest(Promise.resolve("success")),
		wanted: () => "success",
	},
] satisfies Tests<string>;
