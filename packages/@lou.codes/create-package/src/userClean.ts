import { USER } from "./constants.js";

export const userClean = (name: string) => name.replace(`@${USER}/`, "");
