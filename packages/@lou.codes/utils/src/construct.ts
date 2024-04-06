import {
	fromEntries,
	getOwnPropertyDescriptor,
} from "@lou.codes/constants/Object.js";
import { ownKeys } from "@lou.codes/constants/Reflect.js";
import { EMPTY_OBJECT } from "@lou.codes/constants/empty.js";
import { is, isFunction, isSymbol } from "@lou.codes/predicates";
import type { Class, Unbound } from "@lou.codes/types";
import { bind } from "./bind.js";
import { intercept } from "./intercept.js";
import { negate } from "./negate.js";

const notSymbol = negate(isSymbol);
const notConstructor = negate(is("constructor"));
const isWritable = (key: PropertyKey) => (object: object) =>
	getOwnPropertyDescriptor(object, key)?.writable ?? false;

/**
 * Creates a new instance of the given constructor with the given arguments.
 * This also binds all functions to the instance.
 *
 * @category Classes
 * @example
 * ```typescript
 * const constructDate = construct(Date);
 * const { getTime } = constructDate(); // Works because all methods are binded.
 * ```
 * @returns Curried function with `constructor` in context.
 */
export const construct =
	<Constructor extends Class<never>>(constructor: Constructor) =>
	(...constructorArguments: ConstructorParameters<Constructor>) => {
		const instance = new constructor(
			...(constructorArguments as never),
		) as InstanceType<Constructor>;
		const bindInstance = bind(instance);
		const prototype = (constructor.prototype ?? EMPTY_OBJECT) as object;

		return intercept(
			fromEntries(
				(ownKeys(prototype) as Array<keyof InstanceType<Constructor>>)
					.filter(
						(key): key is Exclude<typeof key, symbol> =>
							notSymbol(key) &&
							notConstructor(key) &&
							isWritable(key)(prototype) &&
							isFunction(instance[key]),
					)
					.map(key => [
						key,
						() => bindInstance(instance[key] as Function),
					]),
			),
		)<InstanceType<Constructor>>(instance) as Unbound<
			InstanceType<Constructor>
		>;
	};
