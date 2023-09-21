import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

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
				gray: colors.stone,
			},
		},
	},
};
