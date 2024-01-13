import {
	backgroundRed,
	foregroundBlack,
	foregroundGreen,
	foregroundRed,
	foregroundYellow,
	mix,
} from "@lou.codes/ansi";

/**
 * Fail message with colors.
 *
 * @category Output
 */
export const FAIL = foregroundRed`×`;

/**
 * Test message to be shown next to the test path.
 *
 * @category Output
 */
export const TEST = foregroundYellow`❯`;

/**
 * Pass message with colors.
 *
 * @category Output
 */
export const PASS = foregroundGreen`✓`;

/**
 * Failed test title with colors.
 *
 * @category Output
 */
export const FAILED_TESTS = `
${foregroundRed`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯`}${mix(backgroundRed, foregroundBlack)`Failed tests`}${foregroundRed`⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯`}
`;

/**
 * Exception difference kind.
 *
 * @category Internal
 */
export const EXCEPTION = "EXCEPTION";

/**
 * Unknown error.
 *
 * @category Internal
 */
export const UNKNOWN_ERROR = "Unknown Error";
