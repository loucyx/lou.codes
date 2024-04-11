import type { ReadOnlyArguments } from "../src/ReadOnlyArguments.js";

const testFunction = (_foo: string, _bar: { readonly foo: string }) =>
	undefined;

type TestFunctionArguments = ReadOnlyArguments<typeof testFunction>;

// eslint-disable-next-line functional/no-expression-statements
testFunction(...(["test", { foo: "bar" }] as TestFunctionArguments));

export const wrongFunction = (
	_foo: TestFunctionArguments[0],
	bar: TestFunctionArguments[1],
) => {
	// @ts-expect-error bar is read-only
	// eslint-disable-next-line functional/immutable-data
	bar.foo = "wrong";
};
