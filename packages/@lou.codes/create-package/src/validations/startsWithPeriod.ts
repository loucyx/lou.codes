import { foregroundRed } from "@lou.codes/ansi";
import { EMPTY_STRING } from "@lou.codes/constants/empty.js";

export const startsWithPeriod = (value: string) =>
	value.startsWith(".") ?
		foregroundRed`"${value}" must not start with a period`
	:	EMPTY_STRING;
