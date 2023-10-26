import { foregroundRed } from "@lou.codes/ansi";

export const startsWithUnderscore = (value: string) =>
	value.startsWith("_")
		? foregroundRed`"${value}" must not start with an underscore`
		: "";
