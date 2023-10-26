import type { ReadOnlyArray } from "@lou.codes/types";
import type { Test } from "./Test.js";

export type Tests<Value = unknown> = ReadOnlyArray<Test<Value>>;
