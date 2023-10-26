import type { EmptyArray } from "../src/EmptyArray.js";
import type { EmptyRecord } from "../src/EmptyRecord.js";
import type { EmptyString } from "../src/EmptyString.js";
import type { NotEmpty } from "../src/NotEmpty.js";

export const circle: NotEmpty<EmptyString | "🟢"> = "🟢" as const;

// @ts-expect-error `EmptyString` is `Empty`
export const notEmptyString: NotEmpty<EmptyString> = "";

// @ts-expect-error `EmptyArray` is `Empty`
export const notEmptyArray: NotEmpty<EmptyArray> = [] as const;

// @ts-expect-error `EmptyRecord` is `Empty`
export const notEmptyRecord: NotEmpty<EmptyRecord> = {} as const;
