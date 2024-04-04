import { EMPTY_OBJECT } from "@lou.codes/constants/EMPTY_OBJECT.js";
import { is, isFunction, isSymbol } from "@lou.codes/predicates";
import type { Class, Unbound } from "@lou.codes/types";
import { bind } from "./bind.js";
import { mutate } from "./mutate.js";
import { negate } from "./negate.js";
import { set } from "./set.js";

const notSymbol = negate(isSymbol);
const notConstructor = negate(is("constructor"));
const isWritable = (key: PropertyKey) => (object: object) =>
	Object.getOwnPropertyDescriptor(object, key)?.writable ?? false;

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
		) as Record<PropertyKey, unknown>;
		const bindInstance = bind(instance);
		const prototype = (constructor.prototype ?? EMPTY_OBJECT) as object;

		// eslint-disable-next-line functional/no-loop-statements
		for (const key of Reflect.ownKeys(prototype)) {
			if (
				notSymbol(key) &&
				notConstructor(key) &&
				isWritable(key)(prototype) &&
				isFunction(instance[key])
				// eslint-disable-next-line functional/no-conditional-statements
			) {
				// eslint-disable-next-line functional/no-expression-statements
				mutate(
					set(key)(bindInstance(instance[key] as Function))(instance),
				)(instance);
			}
		}

		return instance as Unbound<InstanceType<Constructor>>;
	};
