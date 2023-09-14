import type { ReadOnlyArray } from "@vangware/types";
import type { Test } from "./Test.js";

export type Tests<Value = unknown> = ReadOnlyArray<Test<Value>>;
