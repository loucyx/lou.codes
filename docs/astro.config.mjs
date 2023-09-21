import prefetch from "@astrojs/prefetch";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import rehypePluginImageNativeLazyLoading from "rehype-plugin-image-native-lazy-loading";
import vitePluginLightningCSS from "vite-plugin-lightningcss";

export default defineConfig({
	integrations: [
		prefetch(),
		starlight({
			customCss: ["./src/tailwind.css"],
			logo: {
				src: "./src/assets/logo.svg",
				replacesTitle: true,
			},
			pagination: false,
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
			title: "Vangware",
		}),
		tailwind({ applyBaseStyles: false }),
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{ rel: "nofollow noopener noreferrer", target: "_blank" },
			],
			rehypePluginImageNativeLazyLoading,
		],
	},
	site: "https://vangware.com/",
	srcDir: "./src",
	vite: {
		build: { target: "ESNext" },
		optimizeDeps: { esbuildOptions: { target: "ESNext" } },
		plugins: [vitePluginLightningCSS()],
	},
});
