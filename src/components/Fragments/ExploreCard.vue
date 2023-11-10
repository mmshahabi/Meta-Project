<script setup lang="ts">
const props = defineProps<{
	id: string
	imgUrl: string
	title: string
	index: number
}>()

const isActive = defineModel<string>("active")
const fadeIn = useFadeIn2("right", "spring", props.index * 500, 750)

const containerClass = computed(() => {
	return isActive.value == props.id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
})
</script>

<template>
  <div
    v-motion
    v-bind="fadeIn"
    :class="containerClass"
    class="flexCenter transition-property-[flex] min-w-[170px] h-[700px]  duration-[0.7s] ease-out-flex cursor-pointer"
    @click="isActive = id">
    <img
      :src="imgUrl"
      alt="planet-04"
      class="absolute w-full h-full object-cover rounded-[24px]">

    <h3
      v-if="isActive !== id"
      class="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
      {{ title }}
    </h3>

    <div
      v-else
      class="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
      <div
        class="flexCenter w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
        <img
          src="/images/headset.svg"
          alt="headset"
          class="w-1/2 h-1/2 object-contain">
      </div>

      <p class="font-normal text-[16px] leading-[20.16px] text-white uppercase">
        Enter Metaverse
      </p>

      <h2 class="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
        {{ title }}
      </h2>
    </div>
  </div>
</template>
