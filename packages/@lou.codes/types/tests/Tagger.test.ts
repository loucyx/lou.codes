import type { Tagger } from "../src/Tagger.js";

const intParser: Tagger<number> = strings => parseInt(strings.join(""), 10);

export const parsed100Template = intParser`100`;

// @ts-expect-error Function has to be used as a tagged template
export const parsed100Function = intParser("100");
