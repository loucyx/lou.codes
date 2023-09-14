import { foregroundRed } from "@vangware/ansi";

export const hasSpecialCharacters = (value: string) =>
	/[~'!()*]/u.test(value.split("/").slice(-1)[0] ?? "")
		? foregroundRed`"${value}" shouldn't contain special characters`
		: "";
