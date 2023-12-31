import type { Test } from "@lou.codes/test";
import { identity } from "../src/identity.js";

export const identityTest = {
	given: "identity with a string",
	must: "return said string immediately",
	received: () => identity("foo"),
	wanted: () => "foo",
} satisfies Test<string>;
