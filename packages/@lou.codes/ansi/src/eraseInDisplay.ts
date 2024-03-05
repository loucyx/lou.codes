import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Clear screen from cursor to beginning, to end of screen, or entire screen.
 *
 * @category Erase
 * @example
 * ```typescript
 * eraseInDisplay(0); // "\u001B[0J" Clear from cursor to end of screen.
 * eraseInDisplay(1); // "\u001B[1J" Clear from cursor to beginning of screen.
 * eraseInDisplay(2); // "\u001B[2J" Clear entire screen.
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input 0 (to end of screen), 1 (to beginning of screen), or 2 (entire screen).
 * @returns ED sequence.
 */
export const eraseInDisplay = controlSequenceIntroducer("J");
