import { EMPTY_ARRAY } from "@lou.codes/constants/empty.js";
import { filter } from "@lou.codes/iterables";
import type { ReadOnlyArray } from "@lou.codes/types";
import { mutate, set } from "@lou.codes/utils";
import type { EventListener } from "./EventListener.js";
import type { EventRegistry } from "./EventRegistry.js";
import type { EventTypeDictionary } from "./EventTypeDictionary.js";

/**
 * Creates a curried function to listen for calls to an event in the passed
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const eventRegistry = {};
 * const onRegistry = on(eventRegistry); // 👈🏻 You are here
 * const onEvent = onRegistry("event");
 * const offEvent = onEvent(() => console.log("event called"));
 * emit(eventRegistry)("event")(); // Logs "event called"
 * offEvent();
 * emit(eventRegistry)("event")(); // Nothing happens
 * ```
 * @template Events Event registry.
 * @param eventRegistry Record of event names mapped to an array of listeners.
 * @returns Curried function with `eventRegistry` in context.
 */
export const on =
	<Events extends EventTypeDictionary>(
		eventRegistry: EventRegistry<Events>,
	) =>
	/**
	 * Creates a curried function to listen for calls to an event of the
	 * `eventRegistry` in context.
	 *
	 * @example
	 * ```typescript
	 * const eventRegistry = {};
	 * const onRegistry = on(eventRegistry);
	 * const onEvent = onRegistry("event"); // 👈🏻 You are here
	 * const offEvent = onEvent(() => console.log("event called"));
	 * emit(eventRegistry)("event")(); // Logs "event called"
	 * offEvent();
	 * emit(eventRegistry)("event")(); // Nothing happens
	 * ```
	 * @template Event Event name.
	 * @param event Event name (has to be a valid key of the `eventRegistry`).
	 * @returns Curried function with `eventRegistry` and `event` in context.
	 */
	<Event extends keyof Events>(event: Event) =>
	/**
	 * Listens for calls of the `event` in context of the `eventRegistry` in
	 * context.
	 *
	 * @example
	 * ```typescript
	 * const eventRegistry = {};
	 * const onRegistry = on(eventRegistry);
	 * const onEvent = onRegistry("event");
	 * const offEvent = onEvent(() => console.log("event called")); // 👈🏻 You are here
	 * emit(eventRegistry)("event")(); // Logs "event called"
	 * offEvent();
	 * emit(eventRegistry)("event")(); // Nothing happens
	 * ```
	 * @param listener Listener to be called when the `event` is emitted.
	 * @returns Function to remove the listener from the `eventRegistry`.
	 */
	(listener: EventListener<Events[Event]>) => (
		mutate(
			set(event)([...(eventRegistry[event] ?? EMPTY_ARRAY), listener])(
				eventRegistry,
			),
		)(eventRegistry),
		() =>
			void mutate(
				set(event)(
					filter(currentListener => currentListener !== listener)(
						eventRegistry[event] as ReadOnlyArray<Events[Event]>,
					),
				)(eventRegistry),
			)(eventRegistry)
	);
