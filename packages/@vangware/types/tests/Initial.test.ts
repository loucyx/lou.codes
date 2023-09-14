import type { Initial } from "../src/Initial.js";

const array = ["💚", "🟩", "💚"];
const emptyArray = [] as const;
const triple = ["💚", "🟩", "💚"] as const;
const string = "vangware";
const emptyString = "";
const looseString = "vangware" as string;

type ArrayInitial = Initial<typeof array>;
type EmptyArrayInitial = Initial<typeof emptyArray>;
type TripleInitial = Initial<typeof triple>;
type StringInitial = Initial<typeof string>;
type EmptyStringInitial = Initial<typeof emptyString>;
type LooseStringInitial = Initial<typeof looseString>;

export const arrayInitial: ArrayInitial = ["💚", "🟩"];
export const emptyArrayInitial: EmptyArrayInitial = [];
export const tripleInitial: TripleInitial = ["💚", "🟩"];
export const stringInitial: StringInitial = "vangwar";
export const emptyStringInitial: EmptyStringInitial = "";
export const looseStringInitial: LooseStringInitial = "vangwar";

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitialString: ArrayInitial = ["💚"];

// Doesn't throw error because the type is `string[]`.
export const arrayWrongInitial: ArrayInitial = [];

// @ts-expect-error Expecting the initial of the triple to be ["💚", "🟩"].
export const tripleWrongInitial: TripleInitial = ["💚"];

// @ts-expect-error Expecting the initial of the string to be "vangwar".
export const stringWrongInitial: StringInitial = "❌";
