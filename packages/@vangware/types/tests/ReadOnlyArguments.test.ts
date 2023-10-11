import type { ReadOnlyArguments } from "../src/ReadOnlyArguments.js";

// eslint-disable-next-line functional/no-return-void, functional/prefer-immutable-types
const testFunction = (_foo: string, _bar: { foo: string }): void => undefined;

type TestFunctionArguments = ReadOnlyArguments<typeof testFunction>;

testFunction(...(["test", { foo: "bar" }] as TestFunctionArguments));

export const wrongFunction = (
	_foo: TestFunctionArguments[0],
	bar: TestFunctionArguments[1],
) => {
	// @ts-expect-error bar is read-only
	// eslint-disable-next-line functional/immutable-data
	bar.foo = "wrong";
};
