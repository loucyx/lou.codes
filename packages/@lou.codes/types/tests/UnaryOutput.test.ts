import type { UnaryOutput } from "../src/UnaryOutput.js";

export const aFunction = (input: number) => `${input}`;

type TestOutput = UnaryOutput<typeof aFunction>;

export const anInput: TestOutput = "0";

// @ts-expect-error Input should be `number`.
export const wrongInput: TestOutput = 0;
