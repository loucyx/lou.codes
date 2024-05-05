import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [starlightPlugin()],
	theme: {
		extend: {
			colors: {
				accent: {
					50: "#FFEBF3",
					100: "#FFD1E5",
					200: "#FFA3CB",
					300: "#FF75B1",
					400: "#FF4797",
					500: "#FF1F80",
					600: "#EE0066",
					700: "#B3004D",
					800: "#750033",
					900: "#3D001B",
					950: "#1F000D",
				},
				gray: {
					50: "#E8F0F7",
					100: "#D1E0F0",
					200: "#9FBFDF",
					300: "#71A1D0",
					400: "#4080BF",
					500: "#306191",
					600: "#214263",
					700: "#112233",
					800: "#0B1722",
					900: "#050A0F",
					950: "#030508",
				},
			},
			fontFamily: {
				mono: ["MonaspaceArgon, monospace"],
				sans: ["Inter, sans-serif"],
			},
		},
	},
};
