import type { Digit, Range } from "@lou.codes/types";
import { escape } from "./escape.js";

/**
 * Octal escaped character in the form \000. Value must be less than 255 (\377).
 *
 * @category Escaped Characters
 */
export const octal = <
	const OctalValue extends
		| `00${Digit}`
		| `0${Range<10, 99>}`
		| `${Range<100, 377>}`,
>(
	octalValue: OctalValue,
) => escape(`${octalValue}`.padStart(3, "0") as `${OctalValue}`);
