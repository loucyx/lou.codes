import type { MultiCharacterString } from "../src/MultiCharacterString.js";

export const multiDigit: MultiCharacterString = "foo";

// TODO: Enable this @ts-expect-error once there's a proper way to exclude empty strings from a string type
// // @ts-expect-error Single character shouldn't work
export const singleDigit: MultiCharacterString = "f";
