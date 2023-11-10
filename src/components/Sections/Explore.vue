<script setup lang="ts">
import { exploreWorlds } from "~/constants/placeholder"

const worldDataList = exploreWorlds

const active = ref("world-1")
</script>

<template>
  <section
    id="explore"
    class="paddings">
    <div class="innerWidth mx-auto flex flex-col">
      <TypingText
        title="| The World"
        class="text-center" />

      <TitleText
        class="text-center">
        Choose the world you want
        <br class="md:block hidden">
        to explore

        <div class="mt-[50px] flex lg:flex-row flex-col min-h-[500px] gap-5">
          <ExploreCard
            v-for="item, index of worldDataList"
            v-bind="item"
            :key="item.id"
            v-model:active="active"
            :index="index" />
        </div>
      </TitleText>
    </div>
  </section>
</template>

<style></style>
