import type { TypeOfValue } from "../src/TypeOfValue.js";

export const bigintTypeOf: TypeOfValue = "bigint";
export const booleanTypeOf: TypeOfValue = "boolean";
export const functionTypeOf: TypeOfValue = "function";
export const nullTypeOf: TypeOfValue = "null";
export const numberTypeOf: TypeOfValue = "number";
export const objectTypeOf: TypeOfValue = "object";
export const stringTypeOf: TypeOfValue = "string";
export const symbolTypeOf: TypeOfValue = "symbol";
export const undefinedTypeOf: TypeOfValue = "undefined";

// @ts-expect-error TypeOfValue has to be one of the above
export const invalidTypeOf: TypeOfValue = "vangware";

// @ts-expect-error TypeOfValue can't be empty.
export const emptyTypeOf: TypeOfValue = "";

// @ts-expect-error TypeOfValue must be an string.
export const nonStringTypeOf: TypeOfValue = undefined;
