import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Takes an `input` number and returns the a SGR sequence.
 *
 * @category Common
 * @example
 * ```typescript
 * controlSequenceIntroducer(13); // "\x1b[13m"
 * controlSequenceIntroducer(42); // "\x1b[42m"
 * ```
 * @see {@link controlSequenceIntroducer}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @param input Input to escape.
 * @returns SGR sequence.
 */
export const selectGraphicRendition = controlSequenceIntroducer("m");
