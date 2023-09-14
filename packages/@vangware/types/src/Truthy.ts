import type { Falsy } from "./Falsy.js";

/**
 * Excludes all {@link Falsy} values of the given Type.
 *
 * @category Common
 * @remarks
 * Type to represent all values of the given Type that are not {@link Falsy}. If
 * all types are {@link Falsy}, the result is `never`.
 * @example
 * ```typescript
 * Truthy<"" | "truthy">; // "truthy"
 * ```
 * @see [Falsy](https://mdn.io/Falsy)
 *
 * @template Type Type to exclude `Falsy` values from.
 */
export type Truthy<Type = unknown> = Exclude<Type, Falsy>;
