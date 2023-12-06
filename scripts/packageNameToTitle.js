import { ALL_UPPER } from "./constants.js";

/** @param {string} packageName */
export const packageNameToTitle = packageName =>
	packageName
		.replace("@lou.codes/", "")
		.replaceAll("-", " ")
		.split(" ")
		.map(word =>
			ALL_UPPER.includes(word) ?
				word.toUpperCase()
			:	word.replace(/./u, character => character.toLocaleUpperCase()),
		)
		.join(" ");
