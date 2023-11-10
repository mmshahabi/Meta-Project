<script setup lang="ts">

</script>

<template>
  <nav

    v-bind="motionVarients.navbar"
    class="xPaddings py-8 relative">
    <div class="absolute w-[50%] inset-0 gradient-01" />

    <div class="mx-auto innerWidth flex justify-between gap-8">
      <img
        src="/images/search.svg"
        alt="search"
        class="w-[24px] h-[24px] object-contain">

      <h2 class="font-extrabold text-[24px] leading-[30px] text-white">
        Metaversus
      </h2>

      <img
        src="/images/menu.svg"
        alt="menu"
        class="w-[24px] h-[24px] object-contain">
    </div>
  </nav>
</template>

<style></style>
