import { iterableToArray, take } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import type { ReadOnlyArray } from "@lou.codes/types";
import { nextDates } from "../src/nextDates.js";

const testDate = nextDates(new Date("1989-10-13T10:15:00.123"));

export const nextDatesTests = [
	{
		given: "* * * * *",
		must: "give a new date every minute",
		received: () => iterableToArray(take(5)(testDate("* * * * *"))),
		wanted: () =>
			[
				"1989-10-13T10:16:00.000",
				"1989-10-13T10:17:00.000",
				"1989-10-13T10:18:00.000",
				"1989-10-13T10:19:00.000",
				"1989-10-13T10:20:00.000",
			].map(date => new Date(date)),
	},
	{
		given: "5 * * * *",
		must: "give a new date on minute 5 of each hour",
		received: () => iterableToArray(take(5)(testDate("5 * * * *"))),
		wanted: () =>
			[
				"1989-10-13T11:05:00.000",
				"1989-10-13T12:05:00.000",
				"1989-10-13T13:05:00.000",
				"1989-10-13T14:05:00.000",
				"1989-10-13T15:05:00.000",
			].map(date => new Date(date)),
	},
	{
		given: "5 10-13 * * *",
		must: "give a new date on minute 5 of hours 10 to 13 of each day",
		received: () => iterableToArray(take(5)(testDate("5 10-13 * * *"))),
		wanted: () =>
			[
				"1989-10-13T11:05:00.000",
				"1989-10-13T12:05:00.000",
				"1989-10-13T13:05:00.000",
				"1989-10-14T10:05:00.000",
				"1989-10-14T11:05:00.000",
			].map(date => new Date(date)),
	},
	{
		given: "* * 31 2 *",
		must: "return nothing because it's an invalid date",
		received: () => iterableToArray(take(5)(testDate("* * 31 2 *"))),
		wanted: () => [],
	},
	{
		given: "* * 30,31 2 *",
		must: "return nothing because it's an invalid date",
		received: () => iterableToArray(take(5)(testDate("* * 30,31 2 *"))),
		wanted: () => [],
	},
	{
		given: "* * 30,31 2 *",
		must: "return nothing because it's an invalid date",
		received: () => iterableToArray(take(5)(testDate("* * 30,31 2 *"))),
		wanted: () => [],
	},
	{
		given: "* * 29,30,31 2 *",
		must: "return only 29 of february dates skip the invalid ones",
		received: () => iterableToArray(take(5)(testDate("* * 29,30,31 2 *"))),
		wanted: () =>
			[
				"1992-02-29T00:00:00.000",
				"1992-02-29T00:01:00.000",
				"1992-02-29T00:02:00.000",
				"1992-02-29T00:03:00.000",
				"1992-02-29T00:04:00.000",
			].map(date => new Date(date)),
	},
	{
		given: "* * * * * as object",
		must: "give a new date every minute",
		received: () => iterableToArray(take(5)(testDate("* * * * *"))),
		wanted: () =>
			[
				"1989-10-13T10:16:00.000",
				"1989-10-13T10:17:00.000",
				"1989-10-13T10:18:00.000",
				"1989-10-13T10:19:00.000",
				"1989-10-13T10:20:00.000",
			].map(date => new Date(date)),
	},
	{
		given: "5 * * * * as object",
		must: "give a new date on minute 5 of each hour",
		received: () => iterableToArray(take(5)(testDate({ minute: 5 }))),
		wanted: () =>
			[
				"1989-10-13T11:05:00.000",
				"1989-10-13T12:05:00.000",
				"1989-10-13T13:05:00.000",
				"1989-10-13T14:05:00.000",
				"1989-10-13T15:05:00.000",
			].map(date => new Date(date)),
	},
	{
		given: "5 10-13 * * * as object",
		must: "give a new date on minute 5 of hours 10 to 13 of each day",
		received: () =>
			iterableToArray(
				take(5)(testDate({ hour: { from: 10, to: 13 }, minute: 5 })),
			),
		wanted: () =>
			[
				"1989-10-13T11:05:00.000",
				"1989-10-13T12:05:00.000",
				"1989-10-13T13:05:00.000",
				"1989-10-14T10:05:00.000",
				"1989-10-14T11:05:00.000",
			].map(date => new Date(date)),
	},
	{
		given: "* * 31 2 * as object",
		must: "return nothing because it's an invalid date",
		received: () =>
			iterableToArray(take(5)(testDate({ dayOfMonth: 31, month: 2 }))),
		wanted: () => [],
	},
	{
		given: "* * 29,30,31 2 * as object",
		must: "return only 29 of february dates skip the invalid ones",
		received: () =>
			iterableToArray(
				take(5)(testDate({ dayOfMonth: [29, 30, 31], month: 2 })),
			),
		wanted: () =>
			[
				"1992-02-29T00:00:00.000",
				"1992-02-29T00:01:00.000",
				"1992-02-29T00:02:00.000",
				"1992-02-29T00:03:00.000",
				"1992-02-29T00:04:00.000",
			].map(date => new Date(date)),
	},
] satisfies Tests<ReadOnlyArray<Date>>;
