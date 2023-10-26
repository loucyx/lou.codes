import { normalizeString } from "../src/normalizeString.js";
import { test } from "./test.js";

export default test(import.meta.url)(
	{
		given: "a plain string",
		must: "return that same string",
		received: () => normalizeString("🟢"),
		wanted: () => "🟢",
	},
	{
		given: "a template string",
		must: "return it as a string",
		received: () => normalizeString`${13}`,
		wanted: () => "13",
	},
);
