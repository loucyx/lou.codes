/**
 * String with more than 1 character on it.
 *
 * @deprecated Not actually deprecated, this type doesn't do anything yet.
 * @category String
 * @remarks
 * This type will be useful when a given string will need more than one
 * character on it. Sadly this type doesn't work because TypeScript considers
 * `""` a string, so `"" + "" === string`, same for `"f" + ""` which is not a
 * multi character string.
 * @example
 * ```typescript
 * const test1: MultiCharacterString = "foo"; // ok
 * const test2: MultiCharacterString = "f"; // error
 * ```
 */
export type MultiCharacterString = `${string}${string}`;
