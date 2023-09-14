import type { Tests } from "@vangware/test";
import { broadcast } from "../src/broadcast.js";

const TEST_EVENT = "test" as const;

type TestRegistry = { [TEST_EVENT]: never };

const { emit, on } = broadcast<TestRegistry>();

const onTestEvent = on(TEST_EVENT);
const emitTestEvent = emit(TEST_EVENT);

export default [
	{
		given: "an emit with listeners",
		must: "call the listeners",
		received: (called = false) =>
			(
				// eslint-disable-next-line no-param-reassign
				onTestEvent(() => (called = true)), emitTestEvent(), called
			),
		wanted: () => true,
	},
	{
		given: "an on handler that's called manually twice, then unregistered",
		must: "call the listener twice, then stop calling it",
		received: (count = 0) => {
			// eslint-disable-next-line no-param-reassign
			const off = onTestEvent(() => (count += 1));

			return (
				emitTestEvent(), emitTestEvent(), off(), emitTestEvent(), count
			);
		},
		wanted: () => 2,
	},
] satisfies Tests;
