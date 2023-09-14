import { foregroundRed } from "@vangware/ansi";

export const hasValidLength =
	(minimum: number) => (maximum: number) => (value: string) =>
		value.length >= minimum && value.length <= maximum
			? ""
			: foregroundRed`"${value}" should be between ${minimum} and ${maximum} characters long`;
