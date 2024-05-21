import { raw } from "@lou.codes/constants/String.js";
import type { Tests } from "@lou.codes/test";
import { controlCharacter } from "../src/controlCharacter.js";

export const controlCharacterTests = [
	{
		given: "a letter L",
		must: "escape it with the c",
		received: () => controlCharacter("L"),
		wanted: () => raw`\cL`,
	},
] satisfies Tests<string>;
