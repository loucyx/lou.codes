import type { Single } from "./Single.js";

/**
 * Takes a value that could be `never`, and if it is `never` it goes to the
 * `Fallback` value.
 *
 * @category Common
 * @remarks
 * There are some scenarios where a value can end up being of type `never`, this
 * works sorta like the the `??` operator, but for `never`.
 * @example
 * ```typescript
 * const value: never = (undefined as never);
 * NeverFallback<typeof value, number>; // Will be number
 * ```
 *
 * @template MaybeNever The type that may or may not be `never`.
 * @template Fallback The fallback type to use if `MaybeNever` is `never`.
 */
export type NeverFallback<MaybeNever, Fallback> =
	Single<MaybeNever> extends Single<never> ? Fallback : MaybeNever;
