import type { IsomorphicIterable } from "@lou.codes/types";
import type { ReadOnlyURL } from "./ReadOnlyURL.js";

/**
 * Iterable of `ReadOnlyURL`s.
 *
 * @category File System
 * @see {@link ReadOnlyURL}
 */
export type ReadOnlyURLs = IsomorphicIterable<ReadOnlyURL>;
