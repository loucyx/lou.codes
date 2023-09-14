import type { Sorter } from "../src/Sorter.js";

type NumberSorter = Sorter<number>;

export const sorter: NumberSorter = inputB => inputA => inputA - inputB;

// @ts-expect-error Return type for Sorter should be `number`.
export const wrongSorter: NumberSorter = inputB => inputA => inputA > inputB;
