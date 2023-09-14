import type { ReplaceType } from "../src/ReplaceType.js";

type User = { readonly name: string; readonly age: number };

type ReallyOldUser = ReplaceType<User, "age", bigint>;
type Robot = ReplaceType<User, "age" | "name", bigint>;
// @ts-expect-error Only properties that exist in User should be used
type WrongUser = ReplaceType<User, "this-property-does-not-exist", bigint>;

export const reallyOldUser: ReallyOldUser = {
	age: 1234567890123456789n,
	name: "John",
};

export const wrongUser: ReallyOldUser = {
	// @ts-expect-error age should be a BigInt
	age: 50,
	name: "John",
};

export const robot: Robot = {
	age: 1234567890123456789n,
	name: 1234567890123456789n,
};

export const wrongRobot: Robot = {
	// @ts-expect-error age should be a BigInt
	age: 50,
	// @ts-expect-error name should be a BigInt
	name: "Johnny 5",
};
