import { foregroundRed } from "@lou.codes/ansi";
import { EMPTY_STRING } from "@lou.codes/constants";

export const startsWithUnderscore = (value: string) =>
	value.startsWith("_") ?
		foregroundRed`"${value}" must not start with an underscore`
	:	EMPTY_STRING;
