import type { EmptyRecord } from "../src/EmptyRecord.js";

export const emptyRecord: EmptyRecord = {} as const;

// @ts-expect-error All properties are undefined.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const emptyRecordProperty = emptyRecord.test.property;

// @ts-expect-error Object should be empty
export const circleRecord: EmptyRecord = { "🟢": "🟩" } as const;

// @ts-expect-error Object should be empty
export const undefinedRecord: EmptyRecord = { "🟢": undefined } as const;
