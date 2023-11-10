<script setup lang="ts">
const props = defineProps<{
	text: string
	index: number
}>()

const number = computed(() => `${props.index < 10 ? "0" : ""} ${props.index + 1}`)
</script>

<template>
  <div class="flexCenter flex-row">
    <div
      class="flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]">
      <p class="font-bold text-[20px] text-white">
        {{ number }}
      </p>
    </div>
    <p class="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {{ text }}
    </p>
  </div>
</template>

<style></style>
