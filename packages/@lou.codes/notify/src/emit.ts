import { EMPTY_ARRAY } from "@lou.codes/constants";
import { forEach } from "@lou.codes/iterables";
import type { IsomorphicIterable, KeyOf } from "@lou.codes/types";
import { applyTo } from "@lou.codes/utils";
import type { Emitter } from "./Emitter.js";
import type { EventListener } from "./EventListener.js";
import type { EventRegistry } from "./EventRegistry.js";
import type { EventTypeDictionary } from "./EventTypeDictionary.js";

/**
 * Creates a curried function to emit events for listeners of the given
 * `eventRegistry`.
 *
 * @example
 * ```typescript
 * const eventRegistry = {};
 * const emitRegistry = emit(eventRegistry); // 👈🏻 You are here
 * const emitEvent = emitRegistry("event");
 * emitEvent("data");
 * ```
 * @template Events Event registry.
 * @param eventRegistry Record of event names mapped to an array of listeners.
 * @returns Curried function with `eventRegistry` in context.
 */
export const emit =
	<Events extends EventTypeDictionary>(
		eventRegistry: EventRegistry<Events>,
	) =>
	/**
	 * Creates a curried function to emit an event of the `eventRegistry` in context.
	 *
	 * @example
	 * ```typescript
	 * const eventRegistry = {};
	 * const emitRegistry = emit(eventRegistry);
	 * const emitEvent = emitRegistry("event"); // 👈🏻 You are here
	 * emitEvent("data");
	 * ```
	 * @template Event Event name.
	 * @param event Event name (has to be a valid key of the `eventRegistry`).
	 * @returns Curried function with `eventRegistry` and `event` in context.
	 */
	<Event extends KeyOf<Events>>(event: Event) =>
		/**
		 * Emits the `event` in context of the `eventRegistry` in context.
		 *
		 * @example
		 * ```typescript
		 * const eventRegistry = {};
		 * const emitRegistry = emit(eventRegistry);
		 * const emitEvent = emitRegistry("event");
		 * emitEvent("data"); // 👈🏻 You are here
		 * ```
		 * @param data Data to pass to the listeners.
		 */
		(data =>
			void forEach<EventListener<typeof data>>(applyTo(data))(
				(eventRegistry[event] ?? EMPTY_ARRAY) as IsomorphicIterable<
					EventListener<typeof data>
				>,
			)) as Emitter<Events[Event]>;
