import { escapeSequence } from "./escapeSequence.js";

/**
 * RIS sequence.
 *
 * @category Common
 * @remarks
 * Resets the entire screen to initial state.
 * @example
 * ```typescript
 * console.log(resetToInitialState); // "\x1b[c"
 * stdout.write(resetToInitialState); // Resets the entire screen to initial state.
 * ```
 *
 * @see {@link escapeSequence}
 * @see [Fs Escape sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#Fs_Escape_sequences)
 */
export const resetToInitialState = escapeSequence("c");
