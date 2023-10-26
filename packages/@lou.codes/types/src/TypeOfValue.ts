import type { KeyOf } from "./KeyOf.js";
import type { TypeOfDictionary } from "./TypeOfDictionary.js";

/**
 * Possible type values returned by `typeof`.
 *
 * @category Common
 * @remarks
 * Type to represent the possible values returned by `typeof`, including the
 * proposed but never added type `"null"` for `null`.
 * @example
 * ```typescript
 * const typeString: TyeOfValue = "string";
 * const typeBoolean: TyeOfValue = "boolean";
 * const typeFunction: TyeOfValue = "function";
 * ```
 * @see {@link TypeOfDictionary}
 * @see [typeof null bug](https://luke.sh/null-bug)
 * @see [typeof typeof rejected proposal](https://luke.sh/null-typeof)
 */
export type TypeOfValue = KeyOf<TypeOfDictionary>;
