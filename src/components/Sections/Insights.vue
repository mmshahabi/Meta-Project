<script setup lang="ts">
import { insights } from "~/constants/placeholder"
</script>

<template>
  <section class="paddings relative z-10">
    <div class="innerWidth mx-auto flex flex-col">
      <TypingText
        title="| Insight"
        class="text-center" />

      <TitleText class="text-center">
        Insight about metaverse
      </TitleText>

      <div class="mt-[50px] flex flex-col gap-[30px]">
        <InsightCard
          v-for="item, index of insights"
          v-bind="item"
          :key="`insight-${index}`"
          :index="index + 1" />
      </div>
    </div>
  </section>
</template>
