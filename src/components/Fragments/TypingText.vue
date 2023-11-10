<script setup lang="ts">
import { vElementVisibility } from "@vueuse/components"
import { useTypeWriter } from "src/composables/type-writer.composable.ts"

const props = defineProps<{ title: string }>()
const textContainer = useTextContainer()

const typeWriter = useTypeWriter(props.title)
</script>

<template>
  <p
    v-element-visibility="typeWriter.onVisible"

    v-bind="textContainer"
    class="font-normal text-[14px] text-secondary-white">
    {{ typeWriter.typedText.value }}
  </p>
</template>
