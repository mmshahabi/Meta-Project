import { fileURLToPath } from "url"

export default defineNuxtConfig({
	app: {
		head: {
			title: "Metaversus",
			link: [{ rel: "icon", href: "/favicon.ico" }]
		}
	},
	modules: [
		"@pinia/nuxt",
		"@unocss/nuxt",
		"@vueuse/nuxt",
		"@nuxt/image-edge",
		"@nuxt/devtools",
		"@vueuse/motion/nuxt"
	],

	components: [
		{
			path: "src/components",
			pathPrefix: false
		}
	],

	vite: {
		vue: {
			script: {
				defineModel: true
			}
		}
	},

	srcDir: "src",
	alias: { src: fileURLToPath(new URL("./src", import.meta.url)) },
	css: ["src/css/app.scss"],
	ssr: false
})
