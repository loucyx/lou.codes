import { escape } from "./escape.js";

/**
 * Matches the beginning of the string, or the beginning of a line if the
 * multiline flag (m) is enabled. This matches a position, not a character.
 *
 * @category Anchors
 */
export const START = "^";

/**
 * Matches the end of the string, or the end of a line if the multiline flag (m)
 * is enabled. This matches a position, not a character.
 *
 * @category Anchors
 */
export const END = "$";

/**
 * Matches a word boundary position between a word character and non-word
 * character or position (start / end of string). See the word character class
 * (w) for more info.
 *
 * @category Anchors
 */
export const WORD_BOUNDARY = escape("b");

/**
 * Matches any position that is not a word boundary. This matches a position,
 * not a character.
 *
 * @category Anchors
 */
export const NOT_WORD_BOUNDARY = escape("B");

/**
 * Matches any character except linebreaks. Equivalent to [^\n\r].
 *
 * @category Character classes
 */
export const ALL = ".";

/**
 * Matches any word character (alphanumeric & underscore). Only matches
 * low-ascii characters (no accented or non-roman characters). Equivalent to
 * [A-Za-z0-9_]
 *
 * @category Character classes
 */
export const WORD = escape("w");

/**
 * Matches any character that is not a word character (alphanumeric &
 * underscore). Equivalent to [^A-Za-z0-9_]
 *
 * @category Character classes
 */
export const NOT_WORD = escape("W");

/**
 * Matches any digit character (0-9). Equivalent to [0-9].
 *
 * @category Character classes
 */
export const DIGIT = escape("d");

/**
 * Matches any character that is not a digit character (0-9). Equivalent to
 * [^0-9].
 *
 * @category Character classes
 */
export const NOT_DIGIT = escape("D");

/**
 * Matches any whitespace character (spaces, tabs, line breaks).
 *
 * @category Character classes
 */
export const WHITESPACE = escape("s");

/**
 * Matches any character that is not a whitespace character (spaces, tabs, line
 * breaks).
 *
 * @category Character classes
 */
export const NOT_WHITESPACE = escape("S");

/**
 * Matches a TAB character (char code 9).
 *
 * @category Escaped Characters
 */
export const TAB = escape("t");

/**
 * Matches a LINE FEED character (char code 10).
 *
 * @category Escaped Characters
 */
export const LINE_FEED = escape("n");

/**
 * Matches a VERTICAL TAB character (char code 11).
 *
 * @category Escaped Characters
 */
export const VERTICAL_TAB = escape("v");

/**
 * Matches a FORM FEED character (char code 12).
 *
 * @category Escaped Characters
 */
export const FORM_FEED = escape("f");

/**
 * Matches a CARRIAGE RETURN character (char code 13).
 *
 * @category Escaped Characters
 */
export const CARRIAGE_RETURN = escape("r");

/**
 * Matches a NULL character (char code 0).
 *
 * @category Escaped Characters
 */
export const NULL = escape("0");
