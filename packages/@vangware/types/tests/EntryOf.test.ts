import type { EntryOf } from "../src/EntryOf.js";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { "🟢": "🟩" };
const constantObject = { "🟢": "🟩" } as const;

type ArrayEntry = EntryOf<typeof array>;
type QuadrupleEntry = EntryOf<typeof quadruple>;
type ObjectEntry = EntryOf<typeof object>;
type ConstantObjectEntry = EntryOf<typeof constantObject>;

export const arrayEntryKey: ArrayEntry[0] = 0;
export const arrayEntryValue: ArrayEntry[1] = array[0] as number;

// @ts-expect-error Array values can be undefined when they aren't tuples.
export const arrayNoAsEntryValue: ArrayEntry[1] = array[0];

// @ts-expect-error Entries are couples (so index 2 is invalid).
export const arrayEntry3: ArrayEntry[2] = 0;

// @ts-expect-error Entry key of an array is of type number, not string.
export const arrayWrongKey: ArrayEntry[0] = "❌";

export const quadrupleEntryKey: QuadrupleEntry[0] = 0;
export const quadrupleEntryValue: QuadrupleEntry[1] = quadruple[3];

export const objectEntryKey: ObjectEntry[0] = "🟢";
export const objectEntryValue: ObjectEntry[1] = "🟩";

// @ts-expect-error Entry key must be one of the object properties.
export const objectWrongKey: ObjectEntry[0] = "💚";

// @ts-expect-error Entry key of an object is of type string, not number.
export const objectWrongKeyType: ObjectEntry[0] = 0;

export const constantObjectEntryKey: ConstantObjectEntry[0] = "🟢";
export const constantConstantObjectEntryValue: ConstantObjectEntry[1] = "🟩";

// @ts-expect-error Entry value of constant object must be expected.
export const constantConstantObjectWrongValue: ConstantObjectEntry[1] = "💚";
