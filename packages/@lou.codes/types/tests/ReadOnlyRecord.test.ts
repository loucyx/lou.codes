import type { ReadOnlyRecord } from "../src/ReadOnlyRecord.js";

const record: ReadOnlyRecord<"🟢", ["🟢"]> = { "🟢": ["🟢"] };

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record["🟢"] = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record["🟢"][0] = "🟩";

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
record["🟢"][0].pop();

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
record.wrong = "🟩";

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
delete record["🟢"];
