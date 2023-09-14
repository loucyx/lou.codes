import type { ReadOnly } from "./ReadOnly.js";
import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Intersection that replaces the type of some keys in given object type.
 *
 * @category Common
 * @remarks
 * Intersection type to replace all the given keys of an object type with a new
 * type.
 * @example
 * ```typescript
 * type User = { name: string; age: number };
 * type ReallyOldUser = ReplaceType<User, "age", bigint>;
 * ```
 * @see {@link ReadOnly}
 * @see {@link ReadOnlyRecord}
 *
 * @template Type Type to replace the type of some keys in.
 * @template Keys Keys to replace the type of.
 * @template NewType New type to replace the old type with.
 */
export type ReplaceType<
	Type extends object,
	Keys extends keyof Type,
	NewType,
> = ReadOnly<Omit<Type, Keys>> & ReadOnlyRecord<Keys, NewType>;
