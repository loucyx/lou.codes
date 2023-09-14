/**
 * A value that might be coming from a `Promise`.
 *
 * @category Common
 * @remarks
 * Union type useful when you want to accept both `Promise` and non-`Promise`
 * for a given type, both "awaitable".
 * @example
 * ```typescript
 * type AwaitableString = Awaitable<string>;
 * const promisedValue: AwaitableString = Promise.resolve("🟢");
 * const plainValue: AwaitableString = "🟩";
 *
 * Promise.all([promisedValue, plainValue]).then(console.log); // ["🟢", "🟩"]
 * ```
 * @see [Promise](https://mdn.io/Promise)
 *
 * @template Type The type to await.
 */
export type Awaitable<Type = unknown> = Promise<Type> | Type;
