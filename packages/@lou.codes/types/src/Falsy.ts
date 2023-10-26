import type { EmptyString } from "./EmptyString.js";
import type { Nullish } from "./Nullish.js";

/**
 * Types that evaluates to `false` in JS.
 *
 * @category Common
 * @remarks
 * Union type of the values that evaluate to `false` in JavaScript. Due to
 * TypeScript type limitations `NaN` can't be included.
 * @example
 * ```typescript
 * const falsyBoolean: Falsy = false;
 * const falsyHTMLAllCollection: Falsy = document.all;
 * const falsyNegativeZero: Falsy = -0;
 * const falsyNegativeZeroBigInt: Falsy = -0n;
 * const falsyNull: Falsy = null;
 * const falsyString: Falsy = "";
 * const falsyUndefined: Falsy = undefined;
 * const falsyZero: Falsy = 0;
 * const falsyZeroBigInt: Falsy = 0n;
 * ```
 * @see {@link Nullish}
 * @see [Falsy](https://mdn.io/Falsy)
 */
export type Falsy = EmptyString | HTMLAllCollection | Nullish | 0 | 0n | false;
