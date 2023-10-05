import { foregroundRed } from "@vangware/ansi";

export const startsWithPeriod = (value: string) =>
	value.startsWith(".")
		? foregroundRed`"${value}" must not start with a period`
		: "";
