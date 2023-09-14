import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves cursor to beginning of the line `input` lines down.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorNextLine(13); // "\x1b[13E"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Amount of lines down.
 * @returns CNL sequence.
 */
export const cursorNextLine = controlSequenceIntroducer("E");
