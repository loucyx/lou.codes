import { foregroundGray, foregroundGreen, underlined } from "@vangware/ansi";
import { USER } from "./constants.js";
import type { Answers } from "./types/Answers.js";
import { userClean } from "./userClean.js";

const git = foregroundGreen`git`;

export const doneMessage = ({ name }: Answers) => `
Done! ✨

${foregroundGreen`cd`} ${underlined`./${name}`}
${git} init
${git} remote add origin ${underlined`git@github.com:${USER}/${userClean(
	name,
)}.git`}
${git} branch -M main
${foregroundGreen`npm`} i ${foregroundGray`# or pnpm or yarn`}
`;
