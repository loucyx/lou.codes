import type { ReadOnlyRecord } from "@lou.codes/types";

/**
 * Dictionary of event name to event types.
 *
 * @example
 * ```typescript
 * const example = {
 * 	eventName: TypeOfEvent,
 * } satisfies EventTypeDictionary;
 * ```
 * @see [ReadOnlyRecord](https://lou.codes/libraries/lou_codes_types/#readonlyrecord)
 */
export type EventTypeDictionary = ReadOnlyRecord<string>;
