import type { Head } from "../src/Head.js";

const array = ["🟢", "🟩", "💚"];
const emptyArray = [] as const;
const triple = ["🟢", "🟩", "💚"] as const;
const string = "vangware";
const emptyString = "";
const looseString = "vangware" as string;

type ArrayHead = Head<typeof array>;
type EmptyArrayHead = Head<typeof emptyArray>;
type TripleHead = Head<typeof triple>;
type StringHead = Head<typeof string>;
type EmptyStringHead = Head<typeof emptyString>;
type LooseStringHead = Head<typeof looseString>;

export const arrayHead: ArrayHead = "🟢";
export const emptyArrayHead: EmptyArrayHead = undefined;
export const tripleHead: TripleHead = "🟢";
export const stringHead: StringHead = "v";
export const emptyStringHead: EmptyStringHead = undefined;
export const looseStringHead: LooseStringHead = "v";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHeadString: ArrayHead = "💚";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHead: ArrayHead = undefined;

// @ts-expect-error Expecting the head of the triple to be "🟢".
export const tripleWrongHead: TripleHead = "💚";

// @ts-expect-error Expecting the head of the string to be "v".
export const stringWrongHead: StringHead = "b";
