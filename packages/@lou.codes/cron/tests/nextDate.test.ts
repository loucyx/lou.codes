import type { Tests } from "@lou.codes/test";
import type { Maybe } from "@lou.codes/types";
import { nextDate } from "../src/nextDate.js";

const testDate = nextDate(new Date("1989-10-13T10:15:00.123"));

export const nextDateTest = [
	{
		given: "* * * * *",
		must: "get next minute",
		received: () => testDate("* * * * *"),
		wanted: () => new Date("1989-10-13T10:16:00.000"),
	},
	{
		given: "5 * * * *",
		must: "get next hour's minute 5",
		received: () => testDate("5 * * * *"),
		wanted: () => new Date("1989-10-13T11:05:00.000"),
	},
	{
		given: "5 10-13 * * *",
		must: "get next hour's minute 5",
		received: () => testDate("5 10-13 * * *"),
		wanted: () => new Date("1989-10-13T11:05:00.000"),
	},
	{
		given: "* * 31 2 *",
		must: "return nothing because it's an invalid date",
		received: () => testDate("* * 31 2 *"),
		wanted: () => undefined,
	},
	{
		given: "* * 30,31 2 *",
		must: "return nothing because it's an invalid date",
		received: () => testDate("* * 30,31 2 *"),
		wanted: () => undefined,
	},
	{
		given: "* * 30,31 2 *",
		must: "return nothing because it's an invalid date",
		received: () => testDate("* * 30,31 2 *"),
		wanted: () => undefined,
	},
	{
		given: "* * 29,30,31 2 *",
		must: "get first minute of next february 29",
		received: () => testDate("* * 29,30,31 2 *"),
		wanted: () => new Date("1992-02-29T00:00:00.000"),
	},
] satisfies Tests<Maybe<Date>>;
