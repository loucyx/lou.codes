import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [starlightPlugin()],
	theme: {
		extend: {
			colors: {
				accent: {
					50: "#FDECF6",
					100: "#FCDAEE",
					200: "#F8B4DD",
					300: "#F58FCC",
					400: "#F169BB",
					500: "#E4A",
					600: "#E0148F",
					700: "#A80F6B",
					800: "#700A47",
					900: "#380524",
					950: "#1C0312",
				},
				gray: {
					50: "#F0E0FF",
					100: "#E3C7FF",
					200: "#C48AFF",
					300: "#A852FF",
					400: "#8A14FF",
					500: "#6E00DB",
					600: "#4F009E",
					700: "#330066",
					800: "#210042",
					900: "#120024",
					950: "#08000F",
				},
			},
			fontFamily: {
				mono: ["MonaspaceArgon, monospace"],
				sans: ["Inter, sans-serif"],
			},
		},
	},
};
