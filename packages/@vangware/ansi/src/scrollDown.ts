import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Scroll whole page down by `input` lines. New lines are added at the top.
 *
 * @category Scroll
 * @example
 * ```typescript
 * scrollDown(13); // "\x1b[13S"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Amount of lines down.
 * @returns SD sequence.
 */
export const scrollDown = controlSequenceIntroducer("S");
