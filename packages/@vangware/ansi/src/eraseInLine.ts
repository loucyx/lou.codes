import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Erases the line from cursor to beginning, to end of line, or entire line.
 *
 * @remarks
 * | input | erases...                |
 * |-------|--------------------------|
 * | 0     | ...to end of line.       |
 * | 1     | ...to beginning of line. |
 * | 2     | ...entire line.          |
 * @category Erase
 * @example
 * ```typescript
 * eraseInLine(0); // "\x1b[0K" Clear from cursor to end of line.
 * eraseInLine(1); // "\x1b[1K" Clear from cursor to beginning of line.
 * eraseInLine(2); // "\x1b[2K" Clear entire line.
 * ```
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input 0 (to end of line), 1 (to beginning of line), or 2 (entire line).
 * @returns EL sequence.
 */
export const eraseInLine = controlSequenceIntroducer("K");
