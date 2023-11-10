<script setup lang="ts">
const textVarient = useTextVarient2()
</script>

<template>
  <h2

    v-bind="textVarient"
    class="mt-[8px] font-bold md:text-[64px] text-[40px] text-white">
    <slot />
  </h2>
</template>

<style></style>
