import { create } from "@lou.codes/constants/Object.js";
import { ownKeys } from "@lou.codes/constants/Reflect.js";
import { isFunction } from "@lou.codes/predicates";
import type { ReadOnlyRecord, UnaryInput } from "@lou.codes/types";

/**
 * Function that takes a dictionary `property -> getter` and uses said getter
 * in the matching property of the object by returning a proxy to it.
 *
 * @category Objects
 * @example
 * ```typescript
 * const test = { foo: "foo" }
 * const barIntercept = intercept({ foo: () => "bar" });
 *
 * const interceptedTest = barIntercept(test);
 * interceptedTest.foo; // "bar"
 * test.foo; // "foo"
 * ```
 * @template Changes Optional changes type to be added to the final return type.
 * @param interceptions Dictionary `property -> handler`.
 * @returns Curried function with `interceptions` in context.
 */
export const intercept = <
	const Interceptions extends ReadOnlyRecord<
		PropertyKey,
		(target: never) => unknown
	>,
>(
	interceptions: Interceptions,
) => {
	const interceptionsArray = ownKeys(interceptions);
	const cleanInterceptions = create<Interceptions>(interceptions);

	const handler = {
		get: (target, property) => {
			const propertyValue = target[property as keyof typeof target];

			return (cleanInterceptions[property]?.(target as never) ??
				(isFunction(propertyValue) ?
					(propertyValue as Function).bind(target)
				:	propertyValue)) as unknown;
		},
		has: (target, property) =>
			property in cleanInterceptions || property in target,
		ownKeys: target => [
			...new Set([...ownKeys(target), ...interceptionsArray]),
		],
	} as const satisfies ProxyHandler<object>;

	return <
		const Target extends object &
			UnaryInput<Interceptions[keyof Interceptions]>,
	>(
		target: Target,
	) =>
		new Proxy<Target>(target, handler) as (keyof Target extends (
			keyof Interceptions
		) ?
			Omit<Target, keyof Interceptions>
		:	Target) & {
			readonly [Property in keyof Interceptions]: ReturnType<
				Interceptions[Property]
			>;
		};
};
