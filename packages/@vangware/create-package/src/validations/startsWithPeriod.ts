import { foregroundRed } from "@vangware/ansi";

export const startsWithPeriod = (value: string) =>
	value.startsWith(".")
		? foregroundRed`"${value}" shouldn't start with a period`
		: "";
