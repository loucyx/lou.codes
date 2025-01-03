import type { Tests } from "@lou.codes/test";
import { iterableToArray } from "../../src/asynchronous/iterableToArray.js";
import { random } from "../../src/asynchronous/random.js";
import { take } from "../../src/asynchronous/take.js";

const seededRandom = random("test")(0)(10);
const seededRandomInverse = random("test")(10)(0);

export const randomTests = [
	{
		given: 'random with the seed "test" and a take(1)',
		must: "return the expected value for it",
		received: () => iterableToArray(take(1)(seededRandom)),
		wanted: () => [2.410_565_743_085_594],
	},
	{
		given: 'random with the seed "test" and a take(2)',
		must: "return the expected value for it",
		received: () => iterableToArray(take(2)(seededRandom)),
		wanted: () => [2.410_565_743_085_594, 8.686_072_819_327_487],
	},
	{
		given: 'random with the seed "test" and a take(10)',
		must: "return the expected value for it",
		received: () => iterableToArray(take(10)(seededRandom)),
		wanted: () => [
			2.410_565_743_085_594, 8.686_072_819_327_487,
			2.356_615_153_922_842_6, 9.240_004_916_265_608,
			6.148_381_524_521_015, 0.131_542_204_211_359_43,
			6.035_279_014_854_524, 4.462_415_669_453_893, 9.596_077_444_636_28,
			5.894_818_917_590_85,
		],
	},
	{
		given: 'random with the seed "test", and inverted from/to and a take(1)',
		must: "return the expected value for it",
		received: () => iterableToArray(take(1)(seededRandomInverse)),
		wanted: () => [2.410_565_743_085_594],
	},
	{
		given: 'random with the seed "test", and inverted from/to and a take(2)',
		must: "return the expected value for it",
		received: () => iterableToArray(take(2)(seededRandomInverse)),
		wanted: () => [2.410_565_743_085_594, 8.686_072_819_327_487],
	},
	{
		given: 'random with the seed "test", and inverted from/to and a take(10)',
		must: "return the expected value for it",
		received: () => iterableToArray(take(10)(seededRandomInverse)),
		wanted: () => [
			2.410_565_743_085_594, 8.686_072_819_327_487,
			2.356_615_153_922_842_6, 9.240_004_916_265_608,
			6.148_381_524_521_015, 0.131_542_204_211_359_43,
			6.035_279_014_854_524, 4.462_415_669_453_893, 9.596_077_444_636_28,
			5.894_818_917_590_85,
		],
	},
] satisfies Tests<ReadonlyArray<number>>;
