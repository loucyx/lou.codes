import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors.js";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [starlightPlugin()],
	theme: {
		extend: {
			colors: {
				accent: {
					50: "oklch(98.12% 0.02 171.81)",
					100: "oklch(95.32% 0.05 169.31)",
					200: "oklch(91.24% 0.09 170.04)",
					300: "oklch(85.71% 0.13 171.67)",
					400: "oklch(78.96% 0.15 170.54)",
					500: "oklch(71.66% 0.14 170.56)",
					600: "oklch(65.73% 0.13 171.77)",
					700: "oklch(52.36% 0.10 175.33)",
					800: "oklch(44.35% 0.08 175.23)",
					900: "oklch(38.66% 0.07 177.91)",
					950: "oklch(26.73% 0.05 183.34)",
				},
				gray: colors.gray,
			},
			fontFamily: {
				mono: ["MonaspaceArgon, monospace"],
				sans: ["Inter, sans-serif"],
			},
		},
	},
};
