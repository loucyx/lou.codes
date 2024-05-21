import type { Digit } from "@lou.codes/types";

/**
 * Possible digits for an hexadecimal number.
 *
 * @category Escaped Characters
 */
export type HexadecimalDigit = `${Digit | "A" | "B" | "C" | "D" | "E" | "F"}`;
