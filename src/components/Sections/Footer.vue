<script setup lang="ts">
import { socials } from "~/constants/placeholder"
</script>

<template>
  <footer

    v-bind="footerVariants"
    class="xPaddings py-8 relative">
    <div class="footer-gradient" />

    <div class="innerWidth mx-auto flex flex-col gap-8">
      <div class="flex items-center justify-between flex-wrap gap-5">
        <h4 class="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>

        <button
          type="button"
          class="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/images/headset.svg"
            alt="headset"
            class="w-[24px] h-[24px] object-contain">

          <span class="font-normal text-[16px] text-white">
            Enter Metaverse
          </span>
        </button>
      </div>

      <div class="flex flex-col">
        <div class="mb-[50px] h-[2px] bg-white opacity-10" />

        <div class="flex items-center justify-between flex-wrap gap-4">
          <h4 class="font-extrabold text-[24px] text-white">
            METAVERUS
          </h4>

          <p class="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div class="flex gap-4">
            <img
              v-for="social of socials"
              :key="social.name"
              :src="social.url"
              :alt="social.name"
              class="w-[24px] h-[24px] object-contain cursor-pointer">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
