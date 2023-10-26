import type { Empty } from "../src/Empty.js";

export const emptyString: Empty = "";
export const emptyArray: Empty = [] as const;
export const emptyRecord: Empty = {} as const;

// @ts-expect-error Number is not a valid empty value
export const number: Empty = 0;

// @ts-expect-error String should be empty
export const circle: Empty = "🟢" as const;

// @ts-expect-error String should be empty
export const space: Empty = " " as const;

// @ts-expect-error Array should be empty
export const numberArray: Empty = [0, 1, 2] as const;

// @ts-expect-error Array should be empty
export const undefinedArray: Empty = [undefined] as const;

// @ts-expect-error Object should be empty
export const record: Empty = { "🟢": "🟩" } as const;

// @ts-expect-error Object should be empty
export const undefinedRecord: Empty = { "🟢": undefined } as const;
