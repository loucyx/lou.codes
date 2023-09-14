import type { Last } from "../src/Last.js";

const array = ["🟢", "🟩", "💚"];
const emptyArray = [] as const;
const triple = ["🟢", "🟩", "💚"] as const;
const string = "vangware";
const emptyString = "";
const looseString = "vangware" as string;

type ArrayLast = Last<typeof array>;
type EmptyArrayLast = Last<typeof emptyArray>;
type TripleLast = Last<typeof triple>;
type StringLast = Last<typeof string>;
type EmptyStringLast = Last<typeof emptyString>;
type LooseStringLast = Last<typeof looseString>;

export const arrayLast: ArrayLast = "💚";
export const emptyArrayLast: EmptyArrayLast = undefined;
export const tripleLast: TripleLast = "💚";
export const stringLast: StringLast = "e";
export const emptyStringLast: EmptyStringLast = undefined;
export const looseStringLast: LooseStringLast = "r";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongLastValues: ArrayLast = "❌";

// Doesn't throw error when empty because the type is `string | undefined`.
export const arrayWrongLast: ArrayLast = undefined;

// @ts-expect-error Expecting the type to be `string | undefined`.
export const arrayWrongLastType: ArrayLast = 13;

// @ts-expect-error Expecting the last of the triple to be "💚".
export const tripleEmptyLast: TripleLast = "";

// @ts-expect-error Expecting the last of the triple to be "💚".
export const tripleWrongLast: TripleLast = "🟢";

// Doesn't throw because the type is `string`

// Doesn't throw because the type is `string`
export const looseStringUndefinedLast: LooseStringLast = undefined;

// Doesn't throw error when empty because the type is `string`
export const looseStringWrongLast: LooseStringLast = "";
