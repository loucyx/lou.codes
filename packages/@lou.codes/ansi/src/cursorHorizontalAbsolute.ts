import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves cursor to the column `input`.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorHorizontalAbsolute(13); // "\x1b[13G"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Column number.
 * @returns CHA sequence.
 */
export const cursorHorizontalAbsolute = controlSequenceIntroducer("G");
