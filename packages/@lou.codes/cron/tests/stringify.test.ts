import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import type { CronString } from "../src/CronString.js";
import { stringify } from "../src/stringify.js";

export const stringifyTests = [
	{
		given: "a * token for all fields",
		must: "return object with all properties set to *",
		received: () =>
			stringify({
				dayOfMonth: "*",
				dayOfWeek: "*",
				hour: "*",
				minute: "*",
				month: "*",
			}),
		wanted: () => "* * * * *",
	},
	{
		given: "a * token for all fields except minute",
		must: "return object with all properties set to * except minute",
		received: () =>
			stringify({
				dayOfMonth: "*",
				dayOfWeek: "*",
				hour: "*",
				minute: 13,
				month: "*",
			}),
		wanted: () => "13 * * * *",
	},
	{
		given: "a * token for all fields except hour",
		must: "return object with all properties set to * except hour",
		received: () =>
			stringify({
				dayOfMonth: "*",
				dayOfWeek: "*",
				hour: 13,
				minute: "*",
				month: "*",
			}),
		wanted: () => "* 13 * * *",
	},
	{
		given: "a * token for all fields except dayOfMonth",
		must: "return object with all properties set to * except dayOfMonth",
		received: () =>
			stringify({
				dayOfMonth: 13,
				dayOfWeek: "*",
				hour: "*",
				minute: "*",
				month: "*",
			}),
		wanted: () => "* * 13 * *",
	},
	{
		given: "a * token for all fields except month",
		must: "return object with all properties set to * except month",
		received: () =>
			stringify({
				dayOfMonth: "*",
				dayOfWeek: "*",
				hour: "*",
				minute: "*",
				month: 10,
			}),
		wanted: () => "* * * 10 *",
	},
	{
		given: "a * token for all fields except dayOfWeek",
		must: "return object with all properties set to * except dayOfWeek",
		received: () =>
			stringify({
				dayOfMonth: "*",
				dayOfWeek: 5,
				hour: "*",
				minute: "*",
				month: "*",
			}),
		wanted: () => "* * * * 5",
	},
	{
		given: "all fields set",
		must: "return object with all properties set",
		received: () =>
			stringify({
				dayOfMonth: 13,
				dayOfWeek: 5,
				hour: 13,
				minute: 13,
				month: 10,
			}),
		wanted: () => "13 13 13 10 5",
	},
	{
		given: "all fields set with ranges",
		must: "return object with all properties set",
		received: () =>
			stringify({
				dayOfMonth: { from: 12, to: 13 },
				dayOfWeek: { from: 4, to: 5 },
				hour: { from: 12, to: 13 },
				minute: { from: 12, to: 13 },
				month: { from: 9, to: 10 },
			}),
		wanted: () => "12-13 12-13 12-13 9-10 4-5",
	},
	{
		given: "all fields set with lists",
		must: "return object with all properties set",
		received: () =>
			stringify({
				dayOfMonth: [12, 13],
				dayOfWeek: [4, 5],
				hour: [12, 13],
				minute: [12, 13],
				month: [9, 10],
			}),
		wanted: () => "12,13 12,13 12,13 9,10 4,5",
	},
	{
		given: "all fields set with lists with ranges",
		must: "return object with all properties set",
		received: () =>
			stringify({
				dayOfMonth: [{ from: 11, to: 12 }, 13],
				dayOfWeek: [{ from: 3, to: 4 }, 5],
				hour: [{ from: 11, to: 12 }, 13],
				minute: [{ from: 11, to: 12 }, 13],
				month: [{ from: 8, to: 9 }, 10],
			}),
		wanted: () => "11-12,13 11-12,13 11-12,13 8-9,10 3-4,5",
	},
	{
		given: "an empty object",
		must: "return all set to *",
		received: () => stringify({}),
		wanted: () => "* * * * *",
	},
	{
		given: "an only hour set",
		must: "return all set to *",
		received: () => stringify({ hour: 13 }),
		wanted: () => "* 13 * * *",
	},
	{
		given: "an invalid value",
		must: "return undefined",
		received: () => stringify({ hour: 99 as 13 }),
		wanted: () => undefined,
	},
] as Tests<Maybe<CronString>>;
