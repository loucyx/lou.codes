import type { Tests } from "@vangware/test";
import { windowOpenPromise } from "../src/windowOpenPromise.js";

const windowOpen = windowOpenPromise({
	// eslint-disable-next-line max-params
	open: (url, target, features) =>
		({
			features,
			target,
			url,
		}) as unknown as Window,
});

const windowOpenFail = windowOpenPromise({
	// eslint-disable-next-line no-null/no-null
	open: _ => null as unknown as Window,
});

export default [
	{
		given: "an object with options",
		must: "return mock with the same options",
		received: () =>
			windowOpen({
				height: 100,
				left: 100,
				menuBar: true,
				noOpener: true,
				scrollbars: false,
				target: "target",
				url: "url",
			}).catch(_ => "Error"),
		wanted: () =>
			({
				features:
					"height=100,left=100,menubar=1,noopener=1,scrollbars=0",
				target: "target",
				url: "url",
			}) as unknown as Window,
	},
	{
		given: "an object with options and a blocked window",
		must: "return the error to be cached",
		received: () =>
			windowOpenFail({
				height: 100,
				left: 100,
				menuBar: true,
				noOpener: true,
				scrollbars: false,
				target: "target",
				url: "url",
			}).catch(_ => "Error"),
		wanted: () => "Error" as unknown as Window,
	},
] satisfies Tests<Window | string>;
