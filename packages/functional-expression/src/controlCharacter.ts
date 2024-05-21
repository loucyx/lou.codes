import type { UppercaseLetters } from "./UppercaseLetters.js";
import { escape } from "./escape.js";

/**
 * Escaped control character in the form \cZ. This can range from \cA (SOH, char
 * code 1) to \cZ (SUB, char code 26).
 *
 * @category Escaped Characters
 */
export const controlCharacter = <const Character extends UppercaseLetters>(
	character: Character,
) => escape(`c${character}`);
