import type { Reducer } from "../src/Reducer.js";

type NumberReducer = Reducer<number, number>;

export const reducer: NumberReducer = input => accumulator =>
	input + accumulator;

// @ts-expect-error Output should be a number (same type as `_accumulator`).
export const wrongReducer: NumberReducer = _input => _accumulator => "🟢";
