import type { WindowOpenPromiseOptions } from "./WindowOpenPromiseOptions.js";

/**
 * WindowOpenPromise features.
 */
export type WindowOpenPromiseFeatures = Omit<
	WindowOpenPromiseOptions,
	"replace" | "target" | "url"
>;
