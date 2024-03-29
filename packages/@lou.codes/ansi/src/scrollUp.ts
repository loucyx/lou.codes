import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Scroll whole page up by `input` lines. New lines are added at the bottom.
 *
 * @category Scroll
 * @example
 * ```typescript
 * scrollUp(13); // "\u001B[13S"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Amount of lines up.
 * @returns SU sequence.
 */
export const scrollUp = controlSequenceIntroducer("S");
