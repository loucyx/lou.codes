import { foregroundRed } from "@lou.codes/ansi";
import { EMPTY_STRING } from "@lou.codes/constants/empty.js";

export const hasSpecialCharacters = (value: string) =>
	/[~'!()*]/u.test(value.split("/").slice(-1)[0] ?? EMPTY_STRING) ?
		foregroundRed`"${value}" must not contain special characters`
	:	EMPTY_STRING;
