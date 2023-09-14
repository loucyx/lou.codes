import { foregroundRed } from "@vangware/ansi";

export const startsWithUnderscore = (value: string) =>
	value.startsWith("_")
		? foregroundRed`"${value}" shouldn't start with an underscore`
		: "";
