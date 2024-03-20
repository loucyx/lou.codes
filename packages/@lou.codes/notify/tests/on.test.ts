import { forEach } from "@lou.codes/iterables";
import type { Tests } from "@lou.codes/test";
import { applyTo } from "@lou.codes/utils";
import type { EventListener } from "../src/EventListener.js";
import type { EventRegistry } from "../src/EventRegistry.js";
import { on } from "../src/on.js";

const TEST_EVENT = "test";

const registry: EventRegistry<{ [TEST_EVENT]: never }> = {};

const manualEmit = () =>
	forEach<EventListener<never>>(applyTo(undefined))(
		registry[TEST_EVENT] ?? [],
	);

const onTestEvent = on(registry)(TEST_EVENT);

export const onTests = [
	{
		given: "an on handler that's called manually",
		must: "call the listener",
		received: (called = false) =>
			(
				// eslint-disable-next-line no-param-reassign
				onTestEvent(() => (called = true)), manualEmit(), called
			),
		wanted: () => true,
	},
	{
		given: "an on handler that's called manually twice, then unregistered",
		must: "call the listener twice, then stop calling it",
		received: (count = 0) => {
			// eslint-disable-next-line no-param-reassign
			const off = onTestEvent(() => (count += 1));

			return manualEmit(), manualEmit(), off(), manualEmit(), count;
		},
		wanted: () => 2,
	},
] satisfies Tests;
