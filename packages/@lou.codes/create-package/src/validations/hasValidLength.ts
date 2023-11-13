import { foregroundRed } from "@lou.codes/ansi";

export const hasValidLength =
	(minimum: number) => (maximum: number) => (value: string) =>
		value.length >= minimum && value.length <= maximum ?
			""
		:	foregroundRed`"${value}" must be between ${minimum} and ${maximum} characters long`;
