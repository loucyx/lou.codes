import type { ReadOnly } from "../src/ReadOnly.js";

const record: ReadOnly<Record<"🟢", ["🟢"]>> = { "🟢": ["🟢"] };

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

const array: ReadOnly<["🟢"]> = ["🟢"];

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
array[0] = "🟩";

// @ts-expect-error Mutations methods not allowed.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, functional/no-expression-statements, functional/immutable-data
array[0].pop();

const map: ReadOnly<Map<"🟢", ["🟢"]>> = new Map([["🟢", ["🟢"]]]);

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements, @typescript-eslint/no-unsafe-call
map.set("🟢", ["🟩"]);

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
map.forEach(value => (value[0] = "🟩"));

const set: ReadOnly<Set<["🟢"]>> = new Set([["🟢"]]);

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements, @typescript-eslint/no-unsafe-call
set.add("🟩");

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements, @typescript-eslint/no-unsafe-call
set.delete("🟢");

// @ts-expect-error Mutations not allowed
// eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
set.forEach(value => (value[0] = "🟩"));
