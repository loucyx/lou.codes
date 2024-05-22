import type { Tests } from "@lou.codes/test";
import { build } from "../src/build.js";
import { group } from "../src/group.js";
import { or } from "../src/or.js";

const regExp = /(?:13|foo)/u;
const createdRegExp = build()(group(or(13, "foo")));

export const buildTests = [
	{
		given: "a 1 and a 3",
		must: "build strings as 13",
		received: () => ({
			flags: createdRegExp.flags,
			source: createdRegExp.source,
		}),
		wanted: () => ({ flags: regExp.flags, source: regExp.source }),
	},
] satisfies Tests<Partial<RegExp>>;
