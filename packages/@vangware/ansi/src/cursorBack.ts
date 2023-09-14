import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor `input` cells back.
 *
 * @category Cursor
 * @remarks
 * If the cursor is already at the edge of the screen, this has no effect.
 * @example
 * ```typescript
 * cursorBack(13); // "\x1b[13C"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Amount of cells back.
 * @returns CUB sequence.
 */
export const cursorBack = controlSequenceIntroducer("D");
