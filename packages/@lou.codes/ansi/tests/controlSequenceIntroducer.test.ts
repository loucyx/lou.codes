import { controlSequenceIntroducer } from "../src/controlSequenceIntroducer.js";
import { test } from "./test.js";

export default test(import.meta.url)(
	{
		given: "a number 13",
		must: "return that number with the CSI scape sequence",
		received: () => controlSequenceIntroducer("m")(13),
		wanted: () => "\x1b[13m",
	},
	{
		given: "a tuple with a number 13 and a number 42",
		must: "return that tuple joined with `;` with the CSI scape sequence",
		received: () => controlSequenceIntroducer("H")([13, 42]),
		wanted: () => "\x1b[13;42H",
	},
	{
		given: "a tuple with an undefined and a number 42",
		must: "return that tuple joined with `;` with the CSI scape sequence",
		received: () => controlSequenceIntroducer("H")([undefined, 42]),
		wanted: () => "\x1b[;42H",
	},
	{
		given: "a tuple with an undefined and an undefined",
		must: "return that tuple joined with `;` with the CSI scape seq`uence",
		received: () => controlSequenceIntroducer("H")([13, undefined]),
		wanted: () => "\x1b[13;H",
	},
);
