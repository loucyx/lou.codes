import type { CREATE, DELETE, UPDATE } from "../constants.js";

export type DifferenceKind = typeof CREATE | typeof DELETE | typeof UPDATE;
