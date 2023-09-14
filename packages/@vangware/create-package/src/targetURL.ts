import { pathToFileURL } from "node:url";
import { createURL } from "./createURL.js";

export const targetURL = createURL(pathToFileURL("./"));
