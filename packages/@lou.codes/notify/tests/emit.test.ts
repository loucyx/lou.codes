import type { Tests } from "@lou.codes/test";
import { emit } from "../src/emit.js";

const TEST_EVENT = "test" as const;

type TestRegistry = { [TEST_EVENT]: never };

export default [
	{
		given: "an emit with listeners",
		must: "call the listeners",
		received: (called = false) => (
			emit<TestRegistry>({
				// eslint-disable-next-line no-param-reassign
				[TEST_EVENT]: [() => (called = true)],
			})(TEST_EVENT)(),
			called
		),
		wanted: () => true,
	},
	{
		given: "an emit without listeners",
		must: "do nothing",
		received: emit<TestRegistry>({ [TEST_EVENT]: [] })(TEST_EVENT),
		wanted: () => undefined,
	},
	{
		given: "an emit without an event",
		must: "do nothing",
		received: emit<TestRegistry>({})(TEST_EVENT),
		wanted: () => undefined,
	},
] satisfies Tests;
