import type { KeyOf, ReadOnly, ReadOnlyArray } from "@vangware/types";
import type { EventListener } from "./EventListener.js";
import type { EventTypeDictionary } from "./EventTypeDictionary.js";

/**
 * Registry of event names to array of listeners.
 *
 * @see {@link EventListener}
 * @see {@link EventTypeDictionary}
 * @example
 * ```typescript
 * const eventRegistry = {
 * 	example: [() => console.log("example called")],
 * };
 * ```
 * @template Events Event registry.
 */
export type EventRegistry<Events extends EventTypeDictionary> = {
	readonly [Event in KeyOf<Events>]?: ReadOnlyArray<
		EventListener<ReadOnly<Events[Event]>>
	>;
};
