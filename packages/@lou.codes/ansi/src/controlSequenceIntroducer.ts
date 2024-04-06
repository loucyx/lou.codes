import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import type { EmptyString, First, Maybe, Second } from "@lou.codes/types";
import { escapeSequence } from "./escapeSequence.js";

/**
 * CSI sequence generator.
 *
 * @category Common
 * @remarks
 * Takes a `code` and an `input` number and returns the CSI sequence.
 * @example
 * ```typescript
 * const selectGraphicRendition = controlSequenceIntroducer("m");
 * selectGraphicRendition(13); // "\u001B[13m"
 * selectGraphicRendition(42); // "\u001B[42m"
 * ```
 * @see {@link escapeSequence}
 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
 *
 * @template Code CSI code generic.
 * @param code CSI code.
 * @returns Curried function with `code` in context.
 */
export const controlSequenceIntroducer =
	<const Code extends string>(code: Code) =>
	/**
	 * Takes an `input` number and returns the CSI sequence.
	 *
	 * @see {@link controlSequenceIntroducer}
	 * @see [CSI (Control Sequence Introducer) sequences](https://en.wikipedia.org/wiki/ANSI_escape_code#CSI_.28Control_Sequence_Introducer.29_sequences)
	 *
	 * @template Input CSI input generic.
	 * @param input CSI input.
	 * @returns CSI sequence.
	 */
	<
		const Input extends
			| number
			| readonly [open: Maybe<number>, close: Maybe<number>],
	>(
		input: Input,
	) =>
		escapeSequence(
			`[${
				typeof input === "number" ? input : (
					(`${input[0] ?? EMPTY_STRING};${input[1] ?? EMPTY_STRING}` as const)
				)
			}${code}` as `[${Input extends (
				readonly [open: Maybe<number>, close: Maybe<number>]
			) ?
				`${First<Input> extends number ? First<Input>
				:	EmptyString};${Second<Input> extends number ? Second<Input>
				:	EmptyString}`
			:	`${Input & number}`}${Code}`,
		);
