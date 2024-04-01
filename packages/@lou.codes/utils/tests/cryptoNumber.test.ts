import type { Tests } from "@lou.codes/test";
import { cryptoNumber } from "../src/cryptoNumber.js";

export const cryptoNumberTests = [
	{
		given: 'a cryptoNumber call with a "test" seed',
		must: "return the same result",
		received: () => cryptoNumber("test"),
		wanted: () => 0.507_088_102_285_537_9,
	},
	{
		given: '2 cryptoNumber calls with a "test" seed',
		must: "return the same result for both",
		received: () =>
			Promise.all([cryptoNumber("test"), cryptoNumber("test")]),
		wanted: () => [0.507_088_102_285_537_9, 0.507_088_102_285_537_9],
	},
] satisfies Tests<number | Array<number>>;
