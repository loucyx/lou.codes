import {
	foregroundBlue,
	foregroundBrightGreen,
	foregroundBrightRed,
	foregroundYellow,
} from "@vangware/ansi";
import { formatValue } from "../src/formatValue.js";
import type { Tests } from "../src/types/Tests.js";

export default [
	{
		given: "a BigInt",
		must: "return formatted BigInt",
		received: () => formatValue(13n),
		wanted: () => `${foregroundBrightGreen`13`}${foregroundBlue`n`}`,
	},
	{
		given: "a Boolean",
		must: "return formatted Boolean",
		received: () => formatValue(true),
		wanted: () => foregroundBlue`true`,
	},
	{
		given: "a Function",
		must: "return formatted Function",
		received: () => formatValue(() => undefined),
		wanted: () => foregroundYellow`Function`,
	},
	{
		given: "a Number",
		must: "return formatted Number",
		received: () => formatValue(13),
		wanted: () => foregroundBrightGreen`13`,
	},
	{
		given: "a null value",
		must: "return formatted null",
		// eslint-disable-next-line no-null/no-null
		received: () => formatValue(null),
		wanted: () => foregroundBlue`null`,
	},
	{
		given: "an Array",
		must: "return formatted Array",
		received: () => formatValue(["🟢", "🟩"]),
		wanted: () =>
			`${foregroundBrightGreen`Array`}([ ${foregroundBrightRed`"🟢"`}, ${foregroundBrightRed`"🟩"`} ])`,
	},
	{
		given: "a Date",
		must: "return formatted Date",
		received: () => formatValue(new Date("1989-10-13T00:00:00.000Z")),
		wanted: () =>
			`${foregroundBrightGreen`Date`}(${foregroundBrightRed`"1989-10-13T00:00:00.000Z"`})`,
	},
	{
		given: "a RegExp",
		must: "return formatted RegExp",
		received: () => formatValue(/.+/gu),
		wanted: () =>
			`${foregroundBrightGreen`RegExp`}(${foregroundBrightRed`/.+/gu`})`,
	},
	{
		given: "an Object",
		must: "return formatted Object",
		received: () => formatValue({ "🟢": "🟩" }),
		wanted: () =>
			`${foregroundBrightGreen`Object`}({ ${foregroundBrightRed`"🟢"`}: ${foregroundBrightRed`"🟩"`} })`,
	},
	{
		given: "an Object without a constructor",
		must: "return formatted Object",
		received: () =>
			formatValue(
				Object.defineProperty({ "🟢": "🟩" }, "constructor", {
					value: undefined,
				}),
			),
		wanted: () =>
			`${foregroundBrightGreen`Object`}({ ${foregroundBrightRed`"🟢"`}: ${foregroundBrightRed`"🟩"`} })`,
	},
	{
		given: "a String",
		must: "return formatted String",
		received: () => formatValue("🟢"),
		wanted: () => foregroundBrightRed`"🟢"`,
	},
	{
		given: "a Symbol",
		must: "return formatted Symbol",
		received: () => formatValue(Symbol()),
		wanted: () => foregroundBrightGreen`Symbol`,
	},
	{
		given: "a Symbol with a description",
		must: "return formatted Symbol",
		received: () => formatValue(Symbol("🟢")),
		wanted: () =>
			foregroundBrightGreen`Symbol(${foregroundBrightRed`"🟢"`})`,
	},
	{
		given: "an undefined value",
		must: "return formatted undefined",
		received: () => formatValue(undefined),
		wanted: () => foregroundBlue`undefined`,
	},
	{
		given: "a Map value",
		must: "return formatted Map",
		received: () => formatValue(new Map([["🟢", "🟩"]])),
		wanted: () =>
			`${foregroundBrightGreen`Map`}({ ${foregroundBrightRed`"🟢"`}: ${foregroundBrightRed`"🟩"`} })`,
	},
	{
		given: "a URL value",
		must: "return formatted URL",
		received: () => formatValue(new URL("https://vangware.com/")),
		wanted: () =>
			`${foregroundBrightGreen`URL`}(${foregroundBrightRed`"https://vangware.com/"`})`,
	},
	{
		given: "a URLSearchParams value",
		must: "return formatted URLSearchParams",
		received: () => formatValue(new URLSearchParams([["🟢", "🟩"]])),
		wanted: () =>
			`${foregroundBrightGreen`URLSearchParams`}({ ${foregroundBrightRed`"🟢"`}: ${foregroundBrightRed`"🟩"`} })`,
	},
	{
		given: "an Error",
		must: "return formatted Error",
		received: () => formatValue(new Error("Test")),
		wanted: () =>
			`${foregroundBrightGreen`Error`}(${foregroundBrightRed`"Test"`})`,
	},
	{
		given: "a TypeError",
		must: "return formatted TypeError",
		received: () => formatValue(new TypeError("Test")),
		wanted: () =>
			`${foregroundBrightGreen`TypeError`}(${foregroundBrightRed`"Test"`})`,
	},
] satisfies Tests<string>;
