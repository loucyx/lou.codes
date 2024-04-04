import type { Unbound } from "../src/Unbound.js";

type HasThisVoid<Method extends Function> =
	// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
	ThisParameterType<Method> extends void ? true : false;

export const unboundTest: HasThisVoid<Unbound<Date>["setTime"]> = true;

export const test: HasThisVoid<Date["setTime"]> = false;
