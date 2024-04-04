import type { Unbound } from "@lou.codes/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Proxy()`.
 *
 * @category Classes
 */
export const constructProxy = construct(Proxy) as <Target extends object>(
	target: Target,
	handler: ProxyHandler<Target>,
) => Unbound<Target>;
