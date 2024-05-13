import { OFF } from "./levels.js";

/**
 * Generates an object with all the given rules set to {@link OFF}.
 *
 * @template {string} Rule
 * @param {ReadonlyArray<Rule>} rules Array of rules to turn off.
 * @returns Object with rules set to {@link OFF}.
 */
export const off = (...rules) =>
	/** @type {Readonly<Record<Rule, typeof OFF>>} */ (
		Object.fromEntries(rules.map(rule => [rule, OFF]))
	);
