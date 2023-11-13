import { foregroundRed } from "@lou.codes/ansi";

export const hasSpecialCharacters = (value: string) =>
	/[~'!()*]/u.test(value.split("/").slice(-1)[0] ?? "") ?
		foregroundRed`"${value}" must not contain special characters`
	:	"";
