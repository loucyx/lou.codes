import type { HeadAndTail } from "../src/HeadAndTail.js";

const array = ["🟢", "🟩", "💚"];
const emptyArray = [] as const;
const triple = ["🟢", "🟩", "💚"] as const;
const string = "vangware";
const emptyString = "";
const looseString = "vangware" as string;

type ArrayHeadAndTail = HeadAndTail<typeof array>;
type EmptyArrayHeadAndTail = HeadAndTail<typeof emptyArray>;
type TripleHeadAndTail = HeadAndTail<typeof triple>;
type StringHeadAndTail = HeadAndTail<typeof string>;
type EmptyStringHeadAndTail = HeadAndTail<typeof emptyString>;
type LooseStringHeadAndTail = HeadAndTail<typeof looseString>;

export const arrayHead: ArrayHeadAndTail[0] = "🟢";
export const arrayTail: ArrayHeadAndTail[1] = ["🟩", "💚"];
export const emptyArrayHead: EmptyArrayHeadAndTail[0] = undefined;
export const emptyArrayTail: EmptyArrayHeadAndTail[1] = [];
export const tripleHead: TripleHeadAndTail[0] = "🟢";
export const tripleTail: TripleHeadAndTail[1] = ["🟩", "💚"];
export const stringHead: StringHeadAndTail[0] = "v";
export const stringTail: StringHeadAndTail[1] = "angware";
export const emptyStringHead: EmptyStringHeadAndTail[0] = undefined;
export const emptyStringTail: EmptyStringHeadAndTail[1] = "";
export const looseStringHead: LooseStringHeadAndTail[0] = "v";
export const looseStringTail: LooseStringHeadAndTail[1] = "angware";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHeadString: ArrayHeadAndTail[0] = "💚";

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongHead: ArrayHeadAndTail[0] = undefined;

// Doesn't throw error because the type is `string[] | undefined`.
export const arrayWrongTailValues: ArrayHeadAndTail[1] = ["vangware", "❌"];

// Doesn't throw error when empty because the type is `string[]`.
export const arrayWrongTail: ArrayHeadAndTail[1] = [];

// @ts-expect-error Expecting the type to be `string[] | undefined`.
export const arrayWrongTailType: ArrayHeadAndTail[1] = [0, 1, 2];

// @ts-expect-error Expecting the head of the triple to be "🟢".
export const tripleWrongHead: TripleHeadAndTail[0] = "💚";

// @ts-expect-error Expecting the tail of the triple to be ["🟩", "💚"].
export const tripleEmptyTail: TripleHeadAndTail[1] = [];

// @ts-expect-error Expecting the tail of the triple to be ["🟩", "💚"].
export const tripleWrongTail: TripleHeadAndTail[1] = ["vangware"];

// Doesn't throw because the type is `string | undefined`
export const looseStringWrongHead: LooseStringHeadAndTail[0] = "❌";

// Doesn't throw because the type is `string | undefined`
export const looseStringWrongTail: LooseStringHeadAndTail[1] = "❌";

// Doesn't throw because the type is `string | undefined`
export const looseStringUndefinedHead: LooseStringHeadAndTail[0] = undefined;

// Doesn't throw error when empty because the type is `string`
export const looseStringUndefinedTail: LooseStringHeadAndTail[1] = "";
