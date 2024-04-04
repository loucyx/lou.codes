import type { Function } from "./Function.js";

/**
 * Type that replaces adds the `this: void` argument to all the methods in the
 * given `Type`.
 *
 * @category Common
 * @remarks
 * This type is used when the unbound of all methods is automated.
 * @example
 * ```typescript
 * Unbound<Date>["getTime"]; // (this: void) => number
 * ```
 *
 * @template Type Type to be unbounded.
 */
export type Unbound<Type = unknown> =
	Type extends ReadonlyArray<infer Item> ?
		{
			[Property in keyof ReadonlyArray<Item>]: ReadonlyArray<Item>[Property] extends (
				Function<infer MethodArguments, infer MethodReturn>
			) ?
				(
					// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
					this: void,
					...methodArguments: MethodArguments
				) => MethodReturn
			:	ReadonlyArray<Item>[Property];
		}
	:	{
			[Property in keyof Type]: Type[Property] extends (
				Function<infer MethodArguments, infer MethodReturn>
			) ?
				(
					// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
					this: void,
					...methodArguments: MethodArguments
				) => MethodReturn
			:	Type[Property];
		};
