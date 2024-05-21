import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { notUnicodeCharacterClassEscape } from "../src/notUnicodeCharacterClassEscape.js";

export const notUnicodeCharacterClassEscapeTests = [
	{
		given: "a unicode character class `\\P{Script_Extensions=Latin}`",
		must: "add a escaped P at the left",
		received: () =>
			notUnicodeCharacterClassEscape("Script_Extensions=Latin"),
		wanted: () => raw`\P{Script_Extensions=Latin}`,
	},
] satisfies Tests<string>;
