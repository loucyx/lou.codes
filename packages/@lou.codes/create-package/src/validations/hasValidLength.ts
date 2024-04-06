import { foregroundRed } from "@lou.codes/ansi";
import { EMPTY_STRING } from "@lou.codes/constants/empty.js";

export const hasValidLength =
	(minimum: number) => (maximum: number) => (value: string) =>
		value.length >= minimum && value.length <= maximum ?
			EMPTY_STRING
		:	foregroundRed`"${value}" must be between ${minimum} and ${maximum} characters long`;
