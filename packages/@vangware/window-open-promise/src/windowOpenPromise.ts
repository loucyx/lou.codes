import { isNull } from "@vangware/predicates";
import { ERROR_MESSAGE } from "./constants.js";
import { featureParser } from "./featureParser.js";
import type { WindowOpenPromiseOptions } from "./WindowOpenPromiseOptions.js";

/**
 * Promised Window.open.
 *
 * @example
 * ```typescript
 * const windowOpen = windowOpenPromise(window);
 * windowOpen({
 * 	url: "https://example.com",
 * 	top: 10,
 *	left: 10
 * })
 * 	.then(newWindow => {
 * 		newWindow.console.log("This will log in the new window.");
 * 		newWindow.addEventListener("beforeunload", _event => {
 * 			console.log("This will log when the new window is closed.");
 * 		});
 * 	})
 * 	.catch(_error => {
 * 		console.error("This will log if the new window can't be opened.");
 * 	});
 * ```
 * @param window Window object (or maybe a mock :D).
 * @returns Curried function with `window` in context.
 */
export const windowOpenPromise =
	(window: Readonly<Pick<Window, "open">>) =>
	/**
	 * Curried function with `window` set.
	 *
	 * @example
	 * ```typescript
	 * const windowOpen = windowOpenPromise(window);
	 * windowOpen({
	 * 	url: "https://example.com",
	 * 	top: 10,
	 *	left: 10
	 * })
	 * 	.then(newWindow => {
	 * 		newWindow.console.log("This will log in the new window.");
	 * 		newWindow.addEventListener("beforeunload", _event => {
	 * 			console.log("This will log when the new window is closed.");
	 * 		});
	 * 	})
	 * 	.catch(_error => {
	 * 		console.error("This will log if the new window can't be opened.");
	 * 	});
	 * ```
	 * @param options WindowOpenPromise options.
	 * @returns Promise with new window.
	 */
	({ url = "", target = "", ...features }: WindowOpenPromiseOptions = {}) =>
		// eslint-disable-next-line max-params
		new Promise<Window>((resolve, reject) =>
			(newWindow =>
				isNull(newWindow)
					? reject(new Error(ERROR_MESSAGE))
					: resolve(newWindow))(
				window.open(url, target, featureParser(features)),
			),
		);
