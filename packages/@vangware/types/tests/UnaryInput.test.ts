import type { UnaryInput } from "../src/UnaryInput.js";

export const aFunction = (input: number) => `${input}`;

type TestInput = UnaryInput<typeof aFunction>;

export const anInput: TestInput = 0;

// @ts-expect-error Input should be `number`.
export const wrongInput: TestInput = "0";
