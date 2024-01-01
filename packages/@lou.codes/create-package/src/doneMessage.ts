import { foregroundGray, foregroundGreen, underlined } from "@lou.codes/ansi";
import { USER } from "./constants.js";
import type { Answers } from "./types/Answers.js";
import { userClean } from "./userClean.js";

const git = foregroundGreen`git`;

export const doneMessage = (answers: Answers) => `
Done! ✨

${foregroundGreen`cd`} ${underlined`./${answers.name}`}
${git} init
${git} remote add origin ${underlined`git@github.com:${USER}/${userClean(
	answers.name,
)}.git`}
${git} branch -M main
${foregroundGreen`npm`} i ${foregroundGray`# or pnpm or yarn`}
`;
