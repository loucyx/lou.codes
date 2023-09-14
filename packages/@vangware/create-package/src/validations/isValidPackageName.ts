import { hasSpecialCharacters } from "./hasSpecialCharacters.js";
import { hasValidLength } from "./hasValidLength.js";
import { isURLFriendlyPackage } from "./isURLFriendlyPackage.js";
import { startsWithPeriod } from "./startsWithPeriod.js";
import { startsWithUnderscore } from "./startsWithUnderscore.js";

export const isValidPackageName = (packageName: string) =>
	hasValidLength(1)(214)(packageName) ||
	startsWithPeriod(packageName) ||
	startsWithUnderscore(packageName) ||
	hasSpecialCharacters(packageName) ||
	isURLFriendlyPackage(packageName);
