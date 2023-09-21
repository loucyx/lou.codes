import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	integrations: [
		starlight({
			customCss: ["./src/tailwind.css"],
			logo: {
				src: "./src/assets/logo.svg",
			},
			sidebar: [
				{
					autogenerate: { directory: "guides" },
					label: "Guides",
				},
				{
					autogenerate: { directory: "libraries" },
					label: "Libraries",
				},
			],
			social: {
				github: "https://github.com/vangware/libraries",
				linkedin: "https://linkedin.com/company/vangware",
				youtube: "https://youtube.com/vangware",
			},
			title: "Vangware Libraries",
		}),
		tailwind({ applyBaseStyles: false }),
	],
	site: "https://vangware.com/",
	srcDir: "./src",
});
