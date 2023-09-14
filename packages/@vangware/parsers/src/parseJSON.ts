import type { JSONValue } from "@vangware/types";
import { attempt } from "./attempt.js";
import { omitProtoReviver } from "./omitProtoReviver.js";

/**
 * Safely parses a JSON string or returns `undefined` if is invalid.
 *
 * @category JSON
 * @remarks
 * `JSON.parse` is unsafe by default, allowing __proto__ poisoning. This
 * function takes care of it while making its types safer as well.
 * @example
 * ```typescript
 * parseJSON('{"__proto__":"😈"}'); // {}
 * parseJSON("invalid"); // undefined
 * ```
 * @see {@link attempt}
 * @see {@link omitProtoReviver}
 *
 * @template Output Generic of the output (has to be a `JSONValue`).
 * @param string String to be parsed.
 * @returns Parsed string or `undefined` if invalid JSON.
 */
export const parseJSON = attempt(
	<Output extends JSONValue = JSONValue>(string: string) =>
		JSON.parse(string, omitProtoReviver) as Output,
);
