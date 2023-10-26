import type { HTMLElementTagGlobalAttributes } from "../src/HTMLElementTagGlobalAttributes.js";

export const validProperties: HTMLElementTagGlobalAttributes = {
	"aria-label": "A description for accessibility",
	"custom-property": "A custom property",
};

export const invalidProperties: Partial<HTMLElementTagGlobalAttributes> = {
	// @ts-expect-error Invalid property value (must be string).
	"aria-label": 23,
};
