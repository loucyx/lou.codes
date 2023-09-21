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
					100: "#E0E0E0",
					200: "#C2C2C2",
					300: "#A3A3A3",
					400: "#858585",
					50: "#F0F0F0",
					500: "#666666",
					600: "#525252",
					700: "#3D3D3D",
					800: "#292929",
					900: "#141414",
					950: "#0A0A0A",
				},
			},
		},
	},
};
