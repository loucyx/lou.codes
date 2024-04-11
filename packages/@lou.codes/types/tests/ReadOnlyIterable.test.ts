import type { ReadOnlyIterable } from "../src/ReadOnlyIterable.js";

export const validIterable: ReadOnlyIterable<number> = [1, 2, 3];

// @ts-expect-error Wrong type
export const wrongType: ReadOnlyIterable<string> = [1, 2, 3];

// @ts-expect-error It only takes iterables
export const wrongKind: ReadOnlyIterable<number> = {};
