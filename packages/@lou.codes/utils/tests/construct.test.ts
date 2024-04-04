import type { Tests } from "@lou.codes/test";
import { construct } from "../src/construct.js";

const constructDate = construct(Date);
const date = constructDate(0);
const { getTime } = date;

export const constructTest = [
	{
		given: "a class being constructed",
		must: "return new instance of the class",
		received: () => date.constructor.name,
		wanted: () => "Date",
	},
	{
		given: "a call of a method",
		must: "work because is unbound",
		received: () => getTime(),
		wanted: () => 0,
	},
] satisfies Tests<string | number>;
