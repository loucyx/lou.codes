import {
	foregroundBlue,
	foregroundBrightGreen,
	foregroundBrightRed,
	foregroundYellow,
} from "@vangware/ansi";
import type { ReadOnlyRecord, TypeOfValue } from "@vangware/types";
import { formatValue } from "./formatValue.js";

/**
 * Dictionary type->formatter to be used by `formatValue`.
 *
 * @category Output
 */
export const formatValueDictionary: ReadOnlyRecord<
	TypeOfValue,
	(value: unknown) => string
> = {
	bigint: value => `${foregroundBrightGreen`${value}`}${foregroundBlue`n`}`,
	boolean: value => foregroundBlue`${value}`,
	function: () => foregroundYellow`Function`,
	null: () => foregroundBlue`null`,
	number: value => foregroundBrightGreen`${value}`,
	object: value =>
		Array.isArray(value)
			? `${foregroundBrightGreen`Array`}([ ${value
					.map(formatValue)
					.join(", ")} ])`
			: value instanceof Date
			? `${foregroundBrightGreen`Date`}(${foregroundBrightRed`"${value.toISOString()}"`})`
			: value instanceof RegExp
			? `${foregroundBrightGreen`RegExp`}(${foregroundBrightRed(
					value.toString(),
			  )})`
			: value instanceof URL
			? `${foregroundBrightGreen`URL`}(${foregroundBrightRed`"${value.href}"`})`
			: value instanceof Error
			? `${foregroundBrightGreen(
					value.name,
			  )}(${foregroundBrightRed`"${value.message}"`})`
			: `${foregroundBrightGreen(
					(
						value as {
							readonly constructor?: { readonly name: string };
						}
					).constructor?.name ?? "Object",
			  )}({ ${(typeof (value as ReadonlyMap<unknown, unknown>)
					.entries === "function"
					? [...(value as ReadonlyMap<unknown, unknown>).entries()]
					: Object.entries(value as ReadOnlyRecord)
			  )
					.map(
						([key, propertyValue]) =>
							`${foregroundBrightRed`"${
								key as string
							}"`}: ${formatValue(propertyValue)}`,
					)
					.join(", ")} })`,
	string: value =>
		foregroundBrightRed`"${(value as string).replace(
			// eslint-disable-next-line no-control-regex
			/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/gu,
			"",
		)}"`,
	symbol: value =>
		foregroundBrightGreen`Symbol${
			(value as symbol).description !== undefined
				? `(${foregroundBrightRed`"${(value as symbol).description}"`})`
				: ""
		}`,
	undefined: () => foregroundBlue`undefined`,
};
