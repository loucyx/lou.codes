import { create } from "./Object.js";

/**
 * Alias for `Object.create` that takes `undefined` instead of `null` for
 * the prototype.
 *
 * @returns Object with no prototype.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const createObject = <OutputType = {}>(prototype?: object) =>
	// eslint-disable-next-line unicorn/no-null
	create(prototype ?? null) as OutputType;
