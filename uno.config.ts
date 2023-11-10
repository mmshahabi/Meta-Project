import { defineConfig } from "unocss"
import { presetWind } from "unocss"
import transformerDirectives from "@unocss/transformer-directives"
import { tailwindShortcuts } from "./src/utils/tailwind-shortcuts"

export default defineConfig({
	shortcuts: [tailwindShortcuts],
	theme: {
		colors: {
			"primary-black": "#1A232E",
			"secondary-white": "#c7c7c7"
		},
		easing: {
			"out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)"
		}
	},
	presets: [presetWind({ arbitraryVariants: true })],
	transformers: [transformerDirectives()]
})
