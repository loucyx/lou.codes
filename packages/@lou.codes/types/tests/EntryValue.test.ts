import type { EntryOf } from "../src/EntryOf.js";
import type { EntryValue } from "../src/EntryValue.js";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { "🟢": "🟩" };
const constantObject = { "🟢": "🟩" } as const;

type ArrayEntry = EntryOf<typeof array>;
type QuadrupleEntry = EntryOf<typeof quadruple>;
type ObjectEntry = EntryOf<typeof object>;
type ConstantObjectEntry = EntryOf<typeof constantObject>;

export const arrayEntryValue: EntryValue<ArrayEntry> = array[0] as number;

// @ts-expect-error Array values can be undefined when they aren't tuples.
export const arrayNoAsEntryValue: EntryValue<ArrayEntry> = array[0];

export const quadrupleEntryValue: EntryValue<QuadrupleEntry> = quadruple[3];

export const objectEntryValue: EntryValue<ObjectEntry> = "🟩";

// @ts-expect-error Entry key of an object is of type string, not number.
export const objectWrongKeyType: ObjectEntry[0] = 0;

export const constantConstantObjectEntryValue: EntryValue<ConstantObjectEntry> =
	"🟩";

// @ts-expect-error Entry value of constant object must be expected.
export const constantConstantObjectWrongValue: EntryValue<ConstantObjectEntry> =
	"💚";
