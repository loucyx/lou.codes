/* eslint-disable max-classes-per-file */
import type { Class } from "../src/Class.js";
import type { ReadOnlyArray } from "../src/ReadOnlyArray.js";

// eslint-disable-next-line functional/no-classes
class UselessClass {
	private readonly inputIsString: boolean;
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	constructor(input: number | string) {
		// eslint-disable-next-line functional/no-this-expressions
		this.inputIsString = typeof input === "string";
	}
	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	get isString() {
		// eslint-disable-next-line functional/no-this-expressions
		return this.inputIsString;
	}
}

// eslint-disable-next-line functional/no-classes, @typescript-eslint/no-extraneous-class
export const simpleGenericConstructor: Class = class {
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/explicit-member-accessibility, @typescript-eslint/no-empty-function
	constructor() {}
};

export const complexGenericConstructor: Class<
	readonly [input: number | string],
	UselessClass
	// eslint-disable-next-line functional/no-classes, @typescript-eslint/no-extraneous-class
> = UselessClass;

export const callbackFunction = <
	Arguments extends ReadOnlyArray = ReadOnlyArray<never>,
>(
	constructor: Class<Arguments, UselessClass>,
	...constructorArguments: Arguments
) => new constructor(...constructorArguments);

// eslint-disable-next-line functional/no-expression-statements
callbackFunction(UselessClass, "hello world");

// @ts-expect-error Function isn't a constructor
export const functionAsConstructor: Class<
	readonly [input: string],
	UselessClass
> = (input: number) => input;

// @ts-expect-error Constructor is expected to take a boolean, not a string | number.
export const wrongArguments: Class<readonly [input: boolean], UselessClass> =
	UselessClass;
