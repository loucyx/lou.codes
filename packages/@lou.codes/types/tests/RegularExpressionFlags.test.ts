import type { RegularExpressionFlags } from "../src/RegularExpressionFlags.js";

export const gimsuFlag: RegularExpressionFlags = "gimsu";
export const gimuFlag: RegularExpressionFlags = "gimu";
export const gisuFlag: RegularExpressionFlags = "gisu";
export const giuFlag: RegularExpressionFlags = "giu";
export const gmsuFlag: RegularExpressionFlags = "gmsu";
export const gmuFlag: RegularExpressionFlags = "gmu";
export const gsuFlag: RegularExpressionFlags = "gsu";
export const guFlag: RegularExpressionFlags = "gu";
export const imsuFlag: RegularExpressionFlags = "imsu";
export const imuFlag: RegularExpressionFlags = "imu";
export const isuFlag: RegularExpressionFlags = "isu";
export const iuFlag: RegularExpressionFlags = "iu";
export const msuFlag: RegularExpressionFlags = "msu";
export const muFlag: RegularExpressionFlags = "mu";
export const suFlag: RegularExpressionFlags = "su";
export const uFlag: RegularExpressionFlags = "u";

// @ts-expect-error Regular expression flag shouldn't be empty.
export const wrongRegExp1: RegularExpressionFlags = "";

// @ts-expect-error Missing `u` flag.
export const wrongRegExp2: RegularExpressionFlags = "g";
