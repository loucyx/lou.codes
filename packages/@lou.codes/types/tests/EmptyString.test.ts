import type { EmptyString } from "../src/EmptyString.js";

export const emptyString: EmptyString = "";

// @ts-expect-error String should be empty
export const circle: EmptyString = "🟢";

// @ts-expect-error String should be empty
export const space: EmptyString = " ";
