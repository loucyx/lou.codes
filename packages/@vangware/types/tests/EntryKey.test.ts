import type { EntryKey } from "../src/EntryKey.js";
import type { EntryOf } from "../src/EntryOf.js";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { "🟢": "🟩" };
const constantObject = { "🟢": "🟩" } as const;

type ArrayEntry = EntryOf<typeof array>;
type QuadrupleEntry = EntryOf<typeof quadruple>;
type ObjectEntry = EntryOf<typeof object>;
type ConstantObjectEntry = EntryOf<typeof constantObject>;

export const arrayEntryKey: EntryKey<ArrayEntry> = 0;

// @ts-expect-error Entry key of an array is of type number, not string.
export const arrayWrongKey: EntryKey<ArrayEntry> = "❌";

export const quadrupleEntryKey: EntryKey<QuadrupleEntry> = 0;

export const objectEntryKey: EntryKey<ObjectEntry> = "🟢";

// @ts-expect-error Entry key must be one of the object properties.
export const objectWrongKey: EntryKey<ObjectEntry> = "💚";

// @ts-expect-error Entry key of an object is of type string, not number.
export const objectWrongKeyType: EntryKey<ObjectEntry> = 0;

export const constantObjectEntryKey: EntryKey<ConstantObjectEntry> = "🟢";
