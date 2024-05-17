import {
	foregroundBlue,
	foregroundBrightGreen,
	foregroundBrightRed,
	foregroundYellow,
} from "@lou.codes/ansi";
import { isArray } from "@lou.codes/constants/Array.js";
import { entries } from "@lou.codes/constants/Object.js";
import { asyncIterator, iterator } from "@lou.codes/constants/Symbol.js";
import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type { ReadOnlyRecord, TypeOfValue } from "@lou.codes/types";
import { formatValue } from "./formatValue.js";

/**
 * Dictionary type->formatter to be used by `formatValue`.
 *
 * @category Output
 */
export const formatValueDictionary: ReadOnlyRecord<
	TypeOfValue,
	(value: never) => string
> = {
	bigint: (value: bigint) =>
		`${foregroundBrightGreen`${value}`}${foregroundBlue`n`}`,
	boolean: (value: boolean) => foregroundBlue`${value}`,
	function: () => foregroundYellow`Function`,
	null: () => foregroundBlue`null`,
	number: (value: number) => foregroundBrightGreen`${value}`,
	object: (value: object) =>
		isArray(value) ?
			`${foregroundBrightGreen`Array`}([ ${value
				.map(formatValue)
				.join(", ")} ])`
		: value instanceof Date ?
			`${foregroundBrightGreen`Date`}(${foregroundBrightRed`"${value.toISOString()}"`})`
		: value instanceof RegExp ?
			`${foregroundBrightGreen`RegExp`}(${foregroundBrightRed(
				value.toString(),
			)})`
		: value instanceof URL ?
			`${foregroundBrightGreen`URL`}(${foregroundBrightRed`"${value.href}"`})`
		: value instanceof Error ?
			`${foregroundBrightGreen(
				value.name,
			)}(${foregroundBrightRed`"${value.message}"`})`
		: iterator in value ? `${foregroundBrightGreen`Iterable`}([ ... ])`
		: asyncIterator in value ?
			`${foregroundBrightGreen`AsyncIterable`}([ ... ])`
		:	`${foregroundBrightGreen(
				(
					value as {
						readonly constructor?: { readonly name: string };
					}
				).constructor?.name ?? "Object",
			)}({ ${((
				typeof (value as ReadonlyMap<unknown, unknown>).entries ===
				"function"
			) ?
				[...(value as ReadonlyMap<unknown, unknown>).entries()]
			:	entries(value as ReadOnlyRecord)
			)
				.map(
					([key, propertyValue]) =>
						`${foregroundBrightRed`"${
							key as string
						}"`}: ${formatValue(propertyValue)}`,
				)
				.join(", ")} })`,
	string: (value: string) =>
		foregroundBrightRed`"${value.replaceAll(
			// eslint-disable-next-line no-control-regex
			/[\u001B\u009B][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/gu,
			EMPTY_STRING,
		)}"`,
	symbol: (value: symbol) =>
		foregroundBrightGreen`Symbol${
			value.description === undefined ?
				EMPTY_STRING
			:	`(${foregroundBrightRed`"${value.description}"`})`
		}`,
	undefined: () => foregroundBlue`undefined`,
};
