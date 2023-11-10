import type { MaybeRef } from "vue"

export function useTypeWriter(title: MaybeRef<string>, input: TypeWriterComposableInput = {}) {
	const typedText = ref("")

	let timeOutRef: NodeJS.Timeout = null
	let i = 0

	input.delay ??= 70

	function onVisible(isVisible: boolean) {
		if (isVisible) {
			i = 0
			clearTimeout(timeOutRef)
			typedText.value = ""
			typeWriter()
		}
	}

	function typeWriter() {
		const rawTitle = unref(title)
		if (i < rawTitle.length) {
			typedText.value += rawTitle.charAt(i)
			i++
			timeOutRef = setTimeout(typeWriter, input.delay)
		}
	}

	return {
		typedText: title,
		onVisible
	}
}

type TypeWriterComposableInput = {
	delay?: number
}
