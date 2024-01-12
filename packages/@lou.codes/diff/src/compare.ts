import { EMPTY_ARRAY } from "@lou.codes/constants";
import { CREATE, DELETE, UPDATE } from "./constants.js";
import type { CreateDifference } from "./types/CreateDifference.js";
import type { DeleteDifference } from "./types/DeleteDifference.js";
import type { UpdateDifference } from "./types/UpdateDifference.js";

/**
 * Function to compare a `left` and a `right` value.
 *
 * @category Difference
 * @remarks
 * This does a deep comparison and yields the differences found with a
 * descriptive object.
 * @example
 * ```typescript
 * compare({ left: "🟢", right: "🟢" }); // []
 * compare({ left: "🟢", right: "❌" }); // [{ kind: UPDATE, left: "🟢", right: "❌", path: [] }]
 * compare({ left: { foo: "🟢" }, right: { foo: "❌" } }); // [{ kind: UPDATE, left: "🟢", right: "❌", path: ["foo"] }]
 * ```
 * @see {@link CreateDifference}
 * @see {@link DeleteDifference}
 * @see {@link UpdateDifference}
 *
 * @param values Values to compare.
 */
export const compare = function* (values: {
	/**
	 * Left value to compare.
	 */
	readonly left?: unknown;
	/**
	 * Right value to compare.
	 */
	readonly right?: unknown;
}): Generator<CreateDifference | DeleteDifference | UpdateDifference> {
	const { left, right } = values;

	if (left !== right) {
		// eslint-disable-next-line functional/no-conditional-statements
		if (Array.isArray(left) && Array.isArray(right)) {
			const leftLength = left.length;
			const rightLength = right.length;

			// eslint-disable-next-line functional/no-loop-statements
			for (
				let index = 0;
				index < Math.max(leftLength, rightLength);
				index += 1
			) {
				// eslint-disable-next-line functional/no-loop-statements
				for (const { path, ...itemDiff } of compare({
					...(index < leftLength ? { left: left[index] } : undefined),
					...(index < rightLength ?
						{ right: right[index] }
					:	undefined),
				})) {
					yield { ...itemDiff, path: [index, ...path] };
				}
			}
		} else {
			if (
				typeof left === "object" &&
				typeof right === "object" &&
				// eslint-disable-next-line unicorn/no-null
				left !== null &&
				// eslint-disable-next-line unicorn/no-null
				right !== null &&
				left.constructor === right.constructor
				// eslint-disable-next-line functional/no-conditional-statements
			) {
				// eslint-disable-next-line functional/no-loop-statements
				for (const key of new Set(
					[left, right].flatMap(Reflect.ownKeys),
				)) {
					// eslint-disable-next-line functional/no-loop-statements
					for (const { path, ...valueDiff } of compare({
						...(key in left ?
							{ left: left[key as keyof typeof left] }
						:	undefined),
						...(key in right ?
							{ right: right[key as keyof typeof right] }
						:	undefined),
					})) {
						yield { ...valueDiff, path: [key, ...path] };
					}
				}
				// eslint-disable-next-line functional/no-conditional-statements
			} else {
				yield {
					...("left" in values ?
						"right" in values ?
							{ kind: UPDATE, left, right }
						:	{ kind: DELETE, left }
					:	{ kind: CREATE, right }),
					path: EMPTY_ARRAY,
				};
			}
		}
	}
};
