<script setup lang="ts">
import { newFeatures } from "~/constants/placeholder"

const fadeInVarient = useFadeIn("right", "tween", 200, 1000)
const planetVariants = usePlanet("right")
</script>

<template>
  <section class="paddings relative z-10">
    <div
      class="innerWidth mx-auto flex lg:flex-row flex-col gap-8">
      <div

        v-bind="fadeInVarient"
        class="flex-[0.95] flex justify-center flex-col">
        <TypingText title="| Whats new?" />
        <TitleText>
          What's new about Metaversus?
        </TitleText>

        <div class="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <NewFeatures
            v-for="feature of newFeatures"
            :key="feature.title"
            v-bind="feature" />
        </div>
      </div>

      <div

        v-bind="planetVariants"
        class="flex-1 flexCenter w-[90%] h-[90%] object-contain">
        <img
          src="/images/whats-new.png"
          alt="get-started">
      </div>
    </div>
  </section>
</template>

<style></style>
