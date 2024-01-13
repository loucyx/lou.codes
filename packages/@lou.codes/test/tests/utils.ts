import { dimmed, foregroundRed } from "@lou.codes/ansi";
import type { IsomorphicIterable, ReadOnlyArray } from "@lou.codes/types";
import { FAIL, PASS } from "../src/constants.js";

export const iterableToArray = async <Item>(
	iterable: IsomorphicIterable<Item>,
) => {
	const output: Array<Item> = [];

	// eslint-disable-next-line functional/no-loop-statements
	for await (const item of iterable) {
		// eslint-disable-next-line functional/immutable-data
		void output.push(item);
	}

	return output as ReadOnlyArray<Item>;
};

export const pass = ({
	given,
	must,
}: {
	readonly given: string;
	readonly must: string;
}) => `${PASS}${dimmed` Given `}${given}${dimmed`, does `}${must}${dimmed`.`}`;

export const fail = ({
	errors,
	given,
	must,
}: {
	readonly errors?: ReadonlyArray<string>;
	readonly given: string;
	readonly must: string;
}) =>
	`${FAIL}${dimmed` Given `}${given}${dimmed`, must `}${must}${dimmed`, but…\n`}${errors?.map((error, index) => `${foregroundRed(index === errors.length - 1 ? "└" : "├")} ${error}`).join("\n") ?? ""}`;
