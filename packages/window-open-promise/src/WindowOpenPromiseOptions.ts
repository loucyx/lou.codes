/**
 * WindowOpenPromise options.
 */
export type WindowOpenPromiseOptions = {
	/**
	 * WindowOpenPromise height (minimum 100).
	 */
	readonly height?: number;

	/**
	 * WindowOpenPromise left position.
	 */
	readonly left?: number;

	/**
	 * WindowOpenPromise renders the menu bar.
	 */
	readonly menuBar?: boolean;

	/**
	 * WindowOpenPromise can't access it's opener.
	 */
	readonly noOpener?: boolean;

	/**
	 * WindowOpenPromise is resizable.
	 */
	readonly resizable?: boolean;

	/**
	 * WindowOpenPromise has scrollbars.
	 */
	readonly scrollbars?: boolean;

	/**
	 * WindowOpenPromise target.
	 */
	readonly target?: string;

	/**
	 * WindowOpenPromise renders the title bar.
	 */
	readonly titleBar?: boolean;

	/**
	 * WindowOpenPromise renders the tool bar.
	 */
	readonly toolBar?: boolean;

	/**
	 * WindowOpenPromise top position.
	 */
	readonly top?: number;

	/**
	 * WindowOpenPromise url.
	 */
	readonly url?: string;

	/**
	 * WindowOpenPromise width (minimum 100).
	 */
	readonly width?: number;
};
