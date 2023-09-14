import type { Tests } from "@vangware/test";
import { between } from "../src/between.js";
import { wantedFalse, wantedTrue } from "./wanted.js";

const between1 = between(1);
const betweenFoo = between("foo");
const between1And1 = between1(1);
const betweenFooAndFoo = betweenFoo("foo");
const between1And10 = between1(10);
const between1AndNegative10 = between1(-10);

export default [
	{
		given: "between function with the same number twice and receiving that number",
		received: () => between1And1(1),
		...wantedTrue,
	},
	{
		given: "between function with the same string twice and receiving that string",
		received: () => betweenFooAndFoo("foo"),
		...wantedTrue,
	},
	{
		given: "between function with the same number twice and receiving another number",
		received: () => between1And1(2),
		...wantedFalse,
	},
	{
		given: "between function with the same string twice and receiving another string",
		received: () => betweenFooAndFoo("bar"),
		...wantedFalse,
	},
	{
		given: "between function with lower to bigger and a number inside of that range",
		received: () => between1And10(5),
		...wantedTrue,
	},
	{
		given: "between function with lower to bigger and a number equal to the lower bound",
		received: () => between1And10(1),
		...wantedTrue,
	},
	{
		given: "between function with lower to bigger and a number equal to the higher bound",
		received: () => between1And10(10),
		...wantedTrue,
	},
	{
		given: "between function with lower to bigger and a number lower to the lower bound",
		received: () => between1And10(0),
		...wantedFalse,
	},
	{
		given: "between function with lower to bigger and a number bigger to the higher bound",
		received: () => between1And10(11),
		...wantedFalse,
	},
	{
		given: "between function with bigger to lower and a number inside the bounds",
		received: () => between1AndNegative10(-5),
		...wantedTrue,
	},
	{
		given: "between function with bigger to lower and a number equal to the lower bound",
		received: () => between1AndNegative10(1),
		...wantedTrue,
	},
	{
		given: "between function with bigger to lower and a number equal to the higher bound",
		received: () => between1AndNegative10(-10),
		...wantedTrue,
	},
	{
		given: "between function with bigger to lower and a number lower to the lower bound",
		received: () => between1AndNegative10(2),
		...wantedFalse,
	},
	{
		given: "between function with bigger to lower and a number bigger to the higher bound",
		received: () => between1AndNegative10(-11),
		...wantedFalse,
	},
] satisfies Tests<boolean>;
