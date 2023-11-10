<script setup lang="ts">
import { startingFeatures } from "~/constants/placeholder"

const planetVarient = usePlanet("left")
const fadeInVarient = useFadeIn("left", "tween", 200, 1000)
const featureList = startingFeatures
</script>

<template>
  <section class="paddings relative z-10">
    <div
      class="innerWidth mx-auto flex lg:flex-row flex-col gap-8">
      <div

        v-bind="planetVarient"
        class="flex-1 flex-grow-1 flexCenter">
        <img
          src="/images/get-started.png"
          alt="get-started"
          class="flex flex-grow object-contain">
      </div>

      <div

        v-bind="fadeInVarient"
        class="flex-1 flex-grow-[0.75] flex justify-center flex-col">
        <TypingText title="| How Metaversus Works" />

        <TitleText>
          Get started with just a few clicks
        </TitleText>

        <div class="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <StartSteps
            v-for="item, index of featureList"
            :key="item"
            :index="index"

            :text="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
