import type { RegularExpression } from "../src/RegularExpression.js";

export const regExpGIMSU: RegularExpression = "/.+/gimsu";
export const regExpGIMU: RegularExpression = "/.+/gimu";
export const regExpGISU: RegularExpression = "/.+/gisu";
export const regExpGIU: RegularExpression = "/.+/giu";
export const regExpGMSU: RegularExpression = "/.+/gmsu";
export const regExpGMU: RegularExpression = "/.+/gmu";
export const regExpGSU: RegularExpression = "/.+/gsu";
export const regExpGU: RegularExpression = "/.+/gu";
export const regExpIMSU: RegularExpression = "/.+/imsu";
export const regExpIMU: RegularExpression = "/.+/imu";
export const regExpISU: RegularExpression = "/.+/isu";
export const regExpIU: RegularExpression = "/.+/iu";
export const regExpMSU: RegularExpression = "/.+/msu";
export const regExpMU: RegularExpression = "/.+/mu";
export const regExpSU: RegularExpression = "/.+/su";
export const regExpU: RegularExpression = "/.+/u";

// @ts-expect-error Regular expression shouldn't be empty.
export const wrongRegExp1: RegularExpression = "";

// @ts-expect-error Regular expression missing string between bars.
export const wrongRegExp2: RegularExpression = "//";

// @ts-expect-error Regular expression missing flags (`u` is the minimum).
export const wrongRegExp3: RegularExpression = "/./";

// @ts-expect-error Missing `u` flag.
export const wrongRegExp4: RegularExpression = "/./g";

// This should throw error but I'm stupid (or maybe TypeScript is, idk).
export const wrongRegExp5: RegularExpression = "//u";
