import { create } from "@lou.codes/constants/Object.js";
import type { EventRegistry } from "./EventRegistry.js";
import type { EventTypeDictionary } from "./EventTypeDictionary.js";
import { emit } from "./emit.js";
import { on } from "./on.js";

/**
 * Creates a new "broadcast" object, which has `emit` and `on` with a shared
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const { emit, on } = broadcast<{ event: string }>();
 * const off = on("event")(console.log);
 * emit("event")("Hello world"); // Logs "Hello world"
 * off();
 * emit("event")("Nope"); // Nothing happens
 * ```
 * @template Events Event registry.
 * @param eventRegistry Optional record of event names mapped to an array of
 * listeners.
 * @returns Object with `emit` and `on` functions.
 */
export const broadcast = <Events extends EventTypeDictionary>(
	eventRegistry = create<EventRegistry<Events>>(),
) => ({ emit: emit(eventRegistry), on: on(eventRegistry) });
