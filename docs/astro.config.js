import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineConfig } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeExternalLinks from "rehype-external-links";
import rehypePluginImageNativeLazyLoading from "rehype-plugin-image-native-lazy-loading";
import vitePluginLightningCSS from "vite-plugin-lightningcss";

export default defineConfig({
	integrations: [
		starlight({
			customCss: ["./src/tailwind.css"],
			expressiveCode: {
				defaultProps: { wrap: false },
				plugins: [pluginLineNumbers()],
				styleOverrides: {
					codeFontFamily: "MonaspaceArgon, monospace",
					uiFontFamily: "MonaspaceArgon, monospace",
				},
				tabWidth: 0,
			},
			head: [
				{
					attrs: { content: "same-origin" },
					tag: "meta",
				},
			],
			logo: {
				replacesTitle: true,
				src: "./src/assets/lou.svg",
			},
			pagination: false,
			sidebar: [
				{
					autogenerate: { directory: "guides" },
					collapsed: true,
					label: "Guides",
				},
				{
					autogenerate: { directory: "libraries" },
					label: "Reference",
				},
			],
			social: {
				github: "https://github.com/loucyx/lou.codes",
				mastodon: "https://mastodon.social/@loucyx",
				youtube: "https://youtube.com/@loucyx",
				// eslint-disable-next-line sort-keys
				linkedin: "https://linkedin.com/in/loucyx",
			},
			title: "Lou's Code",
		}),
		tailwind({ applyBaseStyles: false }),
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeAccessibleEmojis,
				{
					ignore: ["code", "math", "script", "style", "svg", "title"],
				},
			],
			[
				rehypeExternalLinks,
				{ rel: "nofollow noopener noreferrer", target: "_blank" },
			],
			rehypePluginImageNativeLazyLoading,
		],
	},
	prefetch: true,
	site: "https://lou.codes/",
	srcDir: "./src",
	vite: {
		build: { target: "ESNext" },
		optimizeDeps: { esbuildOptions: { target: "ESNext" } },
		plugins: [vitePluginLightningCSS()],
	},
});
