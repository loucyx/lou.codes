import type { Filter } from "../src/Filter.js";

export const filter: Filter<number> = input => input % 2 === 0;

// @ts-expect-error Output should be a boolean
export const wrongFilter: Filter<number> = input => input;

export const wrongComplexFilter: Filter<number | string> = (
	input,
	// @ts-expect-error Output should be a boolean
): input is string => input;
