import type { Comparison } from "../src/Comparison.js";

type NumberComparative = Comparison<number>;

export const comparative: NumberComparative = inputB => inputA =>
	inputA > inputB;

// @ts-expect-error Return type for Comparer should be `boolean`, not `number`.
export const wrong: NumberComparative = inputB => inputA => inputA - inputB;
