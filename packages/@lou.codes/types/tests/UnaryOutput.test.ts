import type { UnaryOutput } from "../src/UnaryOutput.js";

type TestOutput = UnaryOutput<typeof aFunction>;

export const aFunction = (input: number) => `${input}`;

export const anInput: TestOutput = "0";

// @ts-expect-error Input should be `number`.
export const wrongInput: TestOutput = 0;
