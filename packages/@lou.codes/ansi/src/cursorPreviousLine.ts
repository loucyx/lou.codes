import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves cursor to beginning of the line `input` lines up.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorPreviousLine(13); // "\x1b[13F"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Amount of lines up.
 * @returns CPL sequence.
 */
export const cursorPreviousLine = controlSequenceIntroducer("F");
