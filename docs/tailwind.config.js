import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [starlightPlugin()],
	theme: {
		extend: {
			colors: {
				accent: {
					50: "#fff5f9",
					100: "#ffe5f1",
					200: "#ffc7df",
					300: "#ffa3cb",
					400: "#ff6bab",
					500: "#ee0055",
					600: "#d6005d",
					700: "#b80050",
					800: "#a30047",
					900: "#750033",
					950: "#520023",
				},
				gray: {
					50: "#ECF2F9",
					100: "#D5E3F1",
					200: "#ABC7E3",
					300: "#81ABD5",
					400: "#5B91C8",
					500: "#3B75B0",
					600: "#2D5986",
					700: "#1F3D5C",
					800: "#112233",
					900: "#09121B",
					950: "#04080B",
				},
			},
			fontFamily: {
				mono: ["MonaspaceArgon, monospace"],
				sans: ["Inter, sans-serif"],
			},
		},
	},
};
