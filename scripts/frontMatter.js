import { NON_BROWSER_SCRIPT } from "./constants.js";
import { packageNameToTitle } from "./packageNameToTitle.js";

/**
 * @param {{
 * 	readonly description: string;
 * 	readonly title: string;
 * }} options
 */
export const frontMatter = ({ description, title }) => `---
description: "${description}"
${
	NON_BROWSER_SCRIPT.includes(title) ? "" : (
		`head:
    - attrs:
          defer: true
          type: module
      content:
          globalThis.addEventListener(
              "load",
              () =>
                  void import("https://esm.sh/${title}?bundle")
                      .then(
                          library => (
                              Object.assign(globalThis, library),
                              console.log("${title} loaded in globalThis")
                          ),
                      )
                      .catch(() => console.error("${title} couldn't be loaded")),
          );
      tag: script
`
	)
}sidebar:
    label: "${packageNameToTitle(title)}"
title: "${packageNameToTitle(title)} by Lou"
---`;
