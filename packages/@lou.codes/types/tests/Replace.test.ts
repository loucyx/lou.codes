import type { Replace } from "../src/Replace.js";

type User = { readonly name: string; readonly age: number };

type ReallyOldUser = Replace<User, "age", bigint>;
type Robot = Replace<User, "age" | "name", bigint>;
// @ts-expect-error Only properties that exist in User should be used
type WrongUser = Replace<User, "this-property-does-not-exist", bigint>;

export const reallyOldUser: ReallyOldUser = {
	age: 1_234_567_890_123_456_789n,
	name: "John",
};

export const wrongUser: ReallyOldUser = {
	// @ts-expect-error age should be a BigInt
	age: 50,
	name: "John",
};

export const robot: Robot = {
	age: 1_234_567_890_123_456_789n,
	name: 1_234_567_890_123_456_789n,
};

export const wrongRobot: Robot = {
	// @ts-expect-error age should be a BigInt
	age: 50,
	// @ts-expect-error name should be a BigInt
	name: "Johnny 5",
};
