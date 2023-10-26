import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [starlightPlugin()],
	theme: {
		extend: {
			colors: {
				accent: {
					100: "#57FFDD",
					200: "#0A8",
					300: "#009476",
					400: "#008066",
					50: "#A8FFEE",
					500: "#006B56",
					600: "#005745",
					700: "#003D31",
					800: "#002921",
					900: "#001410",
					950: "#000A08",
				},
				gray: {
					100: "#DDDDEE",
					200: "#BBBBDD",
					300: "#9999CC",
					400: "#7777BB",
					50: "#EEEEF6",
					500: "#5555AA",
					600: "#444488",
					700: "#333366",
					800: "#222244",
					900: "#111122",
					950: "#090911",
				},
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
