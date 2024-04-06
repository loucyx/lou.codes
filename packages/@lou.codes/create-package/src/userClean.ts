import { EMPTY_STRING } from "@lou.codes/constants/empty.js";
import { USER } from "./constants.js";

export const userClean = (name: string) =>
	name.replace(`@${USER}/`, EMPTY_STRING);
