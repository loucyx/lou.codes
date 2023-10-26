import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor to position `input`.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorPosition([13, 42]); // "\x1b[13;42H"
 * cursorPosition([undefined, 42]); // "\x1b[;42H"
 * cursorPosition([13, undefined]); // "\x1b[13;H"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Position (row, column)
 * @returns CUP sequence.
 */
export const cursorPosition = controlSequenceIntroducer("H");
