import type { Predicate } from "../src/Predicate.js";

export const complexPredicate: Predicate<number | string, string> = (
	input: number | string,
): input is string => typeof input === "string";

// @ts-expect-error Output should be a boolean
export const wrongPredicate: Predicate<number, number> = input => input;
