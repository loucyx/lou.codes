import type { Either } from "./Either.js";
import type { EmptyArray } from "./EmptyArray.js";
import type { EmptyRecord } from "./EmptyRecord.js";
import type { EmptyString } from "./EmptyString.js";
import type { ReadOnlyArray } from "./ReadOnlyArray.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Creates an union of the given type with a possible "empty" value.
 *
 * @category Array
 * @category Object
 * @category String
 * @remarks
 * This type is useful to make clear that we expect a possible empty value.
 * @example
 * ```typescript
 * type Greet: MaybeEmpty<"Hello">; // "Hello" | ""
 * type Triple: MaybeEmpty<readonly [1, 2, 3]>; // readonly [1, 2, 3] | readonly []
 * type Foo: MaybeEmpty<{ readonly foo: "bar" }>; // { readonly foo: "bar" } | {}
 * ```
 * @see {@link Either}
 * @see {@link EmptyArray}
 * @see {@link EmptyRecord}
 * @see {@link EmptyString}
 *
 * @template Input Type to unite with it's empty counterpart.
 */
export type MaybeEmpty<Input> = Either<
	Input,
	Input extends ReadOnlyArray ? EmptyArray
	: Input extends string ? EmptyString
	: Input extends ReadOnlyRecord ? EmptyRecord
	: undefined
>;
