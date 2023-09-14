import type { ReadOnlyArray } from "@vangware/types";

/**
 * Difference object from `deep-diff`, with some customizations on top.
 *
 * @category Test
 * @example
 * ```typescript
 * const difference: Difference<string> = {
 * 	kind: "E",
 * 	path: ["🟢", "🟩"],
 * 	lhs: "🟢",
 * 	rhs: "🟩",
 * };
 * ```
 * @see [deep-diff](https://npm.im/deep-diff)
 *
 * @template Value Type of value being compared.
 */
export type Difference<Value = unknown> =
	| {
			/** Array index. */
			readonly index: number;
			/** Difference item kind. */
			readonly item: Difference<Value>;
			/** Difference array kind. */
			readonly kind: "A";
			/** Difference path. */
			readonly path?: ReadOnlyArray<string>;
	  }
	| {
			/** Difference delete kind. */
			readonly kind: "D";
			/** Original value (left side). */
			readonly lhs: Value;
			/** Difference path. */
			readonly path?: ReadOnlyArray<string>;
	  }
	| {
			/** Difference edit kind. */
			readonly kind: "E";
			/** Original value (left side). */
			readonly lhs: Value;
			/** Difference path. */
			readonly path?: ReadOnlyArray<string>;
			/** New value (right side). */
			readonly rhs: Value;
	  }
	| {
			/** Difference new kind. */
			readonly kind: "N";
			/** Difference path. */
			readonly path: ReadOnlyArray<string>;
			/** New value (right side). */
			readonly rhs: Value;
	  }
	| {
			/** Error object or message. */
			readonly error: unknown;
			/** Difference exception kind. */
			readonly kind: "X";
	  };
