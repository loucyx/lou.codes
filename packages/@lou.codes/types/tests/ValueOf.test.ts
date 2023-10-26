import type { ValueOf } from "../src/ValueOf.js";

const array = [0, 1, 2, 3];
const quadruple = [0, 1, 2, 3] as const;
const object = { "🟢": "🟩" };
const constantObject = { "🟢": "🟩", [Symbol("🟢")]: "🟢" } as const;

type ArrayValue = ValueOf<typeof array>;
type QuadrupleValue = ValueOf<typeof quadruple>;
type ObjectValue = ValueOf<typeof object>;
type ConstantObjectValue = ValueOf<typeof constantObject>;

export const arrayValue: ArrayValue = 0;

// @ts-expect-error Value of `array` is of type `number`, not string.
export const arrayWrongValue: ArrayValue = "❌";

export const quadrupleValue: QuadrupleValue = 0;
export const objectValue: ObjectValue = "🟢";

// @ts-expect-error Value of quadruple must be one of the values in it.
export const quadrupleWrongValue: QuadrupleValue = 5;

// @ts-expect-error Value of an object is of type string, not number.
export const objectWrongKeyType: ObjectValue = 0;

// @ts-expect-error Constant object expects value `"🟩"`
export const constantObjectValue: ConstantObjectValue = "🟢";
