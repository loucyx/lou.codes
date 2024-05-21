import type { Tests } from "@lou.codes/test";
import { quantity } from "../src/quantity.js";

export const quantityTests = [
	{
		given: "a number 13 and a test string",
		must: "string with added {} and the provided quantity",
		received: () => quantity(13)("test"),
		wanted: () => "test{13}",
	},
	{
		given: "a number 10, a 13 and a test string",
		must: "string with added {} and the provided quantity",
		received: () => quantity("10,13")("test"),
		wanted: () => "test{10,13}",
	},
	{
		given: "a number 13, and nothing with a test string",
		must: "string with added {} and the provided quantity",
		received: () => quantity("13,")("test"),
		wanted: () => "test{13,}",
	},
] satisfies Tests<string>;
