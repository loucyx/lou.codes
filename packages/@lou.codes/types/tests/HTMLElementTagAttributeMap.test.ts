import type { HTMLElementTagAttributeMap } from "../src/HTMLElementTagAttributeMap.js";

export const validTagA: keyof HTMLElementTagAttributeMap = "a";
export const validTagStrong: keyof HTMLElementTagAttributeMap = "strong";
export const validTagSection: keyof HTMLElementTagAttributeMap = "section";
export const validCustomElement: keyof HTMLElementTagAttributeMap =
	"test-element";

export const validTagProperties: Partial<HTMLElementTagAttributeMap> = {
	strong: {
		"aria-label": "A description for accessibility",
		"custom-property": "A custom property",
	},
};

// @ts-expect-error Invalid tag name
export const invalidTagName: keyof HTMLElementTagAttributeMap = "nope";

export const invalidTagProperties: Partial<HTMLElementTagAttributeMap> = {
	strong: {
		// @ts-expect-error Invalid property value (must be string).
		"aria-label": 23,
	},
};
