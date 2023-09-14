import type { InitialAndLast } from "../src/InitialAndLast.js";

const array = ["🟢", "🟩", "💚"];
const emptyArray = [] as const;
const triple = ["🟢", "🟩", "💚"] as const;
const string = "vangware" as const;
const emptyString = "";
const looseString = "vangware" as string;

type ArrayInitialAndLast = InitialAndLast<typeof array>;
type EmptyArrayInitialAndLast = InitialAndLast<typeof emptyArray>;
type TripleInitialAndLast = InitialAndLast<typeof triple>;
type StringInitialAndLast = InitialAndLast<typeof string>;
type EmptyStringInitialAndLast = InitialAndLast<typeof emptyString>;
type LooseStringInitialAndLast = InitialAndLast<typeof looseString>;

export const arrayInit: ArrayInitialAndLast[0] = ["🟢", "🟩"];
export const arrayLast: ArrayInitialAndLast[1] = "💚";
export const emptyArrayInit: EmptyArrayInitialAndLast[0] = [];
export const emptyArrayLast: EmptyArrayInitialAndLast[1] = undefined;
export const tripleInit: TripleInitialAndLast[0] = ["🟢", "🟩"];
export const tripleLast: TripleInitialAndLast[1] = "💚";
export const stringInit: StringInitialAndLast[0] = "vangwar";
export const stringLast: StringInitialAndLast[1] = "e";
export const emptyStringInit: EmptyStringInitialAndLast[0] = "";
export const emptyStringLast: EmptyStringInitialAndLast[1] = undefined;
export const looseStringInit: LooseStringInitialAndLast[0] = "vangwar";
export const looseStringLast: LooseStringInitialAndLast[1] = "e";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitString: ArrayInitialAndLast[0] = ["💚"];

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInit: ArrayInitialAndLast[0] = [];

// Doesn't throw error because the type is `string | undefined`.
export const arrayWrongLastValues: ArrayInitialAndLast[1] = "❌";

// Doesn't throw error when empty because the type is `string | undefined`.
export const arrayWrongLast: ArrayInitialAndLast[1] = undefined;

// @ts-expect-error Expecting the type to be `string | undefined`.
export const arrayWrongLastType: ArrayInitialAndLast[1] = 1;

// @ts-expect-error Expecting the init of the triple to be ["🟢", "🟩"].
export const tripleWrongInit: TripleInitialAndLast[0] = ["💚"];

// @ts-expect-error Expecting the last of the triple to be "💚".
export const tripleEmptyLast: TripleInitialAndLast[1] = "";

// @ts-expect-error Expecting the last of the triple to be "💚".
export const tripleWrongLast: TripleInitialAndLast[1] = "🟢";

// Doesn't throw because the type is `string`
export const looseStringWrongInit: LooseStringInitialAndLast[0] = "❌";

// Doesn't throw because the type is `string`
export const looseStringUndefinedLast: LooseStringInitialAndLast[1] = undefined;

// Doesn't throw error when empty because the type is `string`
export const looseStringWrongLast: LooseStringInitialAndLast[1] = "";
