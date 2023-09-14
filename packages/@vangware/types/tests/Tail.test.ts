import type { Tail } from "../src/Tail.js";

const array = ["🟢", "🟩", "💚"];
const emptyArray = [] as const;
const triple = ["🟢", "🟩", "💚"] as const;
const string = "vangware";
const emptyString = "";
const looseString = "vangware" as string;

type ArrayTail = Tail<typeof array>;
type EmptyArrayTail = Tail<typeof emptyArray>;
type TripleTail = Tail<typeof triple>;
type StringTail = Tail<typeof string>;
type EmptyStringTail = Tail<typeof emptyString>;
type LooseStringTail = Tail<typeof looseString>;

export const arrayTail: ArrayTail = ["🟩", "💚"];
export const emptyArrayTail: EmptyArrayTail = [];
export const tripleTail: TripleTail = ["🟩", "💚"];
export const stringTail: StringTail = "angware";
export const emptyStringTail: EmptyStringTail = "";
export const looseStringTail: LooseStringTail = "angware";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongTailValues: ArrayTail = ["🟢", "❌"];

// Doesn't throw error when empty because the type is `string[]`.
export const arrayWrongTail: ArrayTail = [];

// @ts-expect-error Expecting the type to be `string[]`.
export const arrayWrongTailType: ArrayTail = [0, 1, 2];

// @ts-expect-error Expecting the tail of the triple to be ["🟩", "💚"].
export const tripleEmptyTail: TripleTail = [];

// @ts-expect-error Expecting the tail of the triple to be ["🟩", "💚"].
export const tripleWrongTail: TripleTail = ["❌"];

// Doesn't throw because the type is `string`
export const looseStringWrongTail: LooseStringTail = "❌";

// Doesn't throw error when empty because the type is `string`
export const looseStringUndefinedTail: LooseStringTail = "";
