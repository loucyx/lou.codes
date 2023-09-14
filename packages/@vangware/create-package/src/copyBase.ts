import { copy } from "./copy.js";
import { sourceURL } from "./sourceURL.js";
import { targetURL } from "./targetURL.js";

export const copyBase = (name: string) =>
	copy(sourceURL("../base/"))(targetURL(`${name}/`));
