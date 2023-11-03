import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [starlightPlugin()],
	theme: {
		extend: {
			colors: {
				accent: colors.emerald,
				gray: colors.gray,
			},
			fontFamily: {
				mono: ["FiraCode, monospace"],
				sans: [
					"Inter, sans-serif",
					{
						fontFeatureSettings: '"cv11", "ss01"',
						fontVariationSettings: '"opsz" 32',
					},
				],
			},
		},
	},
};
