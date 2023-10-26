import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor `input` cells up.
 *
 * @category Cursor
 * @remarks
 * If the cursor is already at the edge of the screen, this has no effect.
 * @example
 * ```typescript
 * cursorUp(13); // "\x1b[13A"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Amount of cells up.
 * @returns CUU sequence.
 */
export const cursorUp = controlSequenceIntroducer("A");
