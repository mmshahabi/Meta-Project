<script setup lang="ts">
const headingVarient = useTextVarient(1100)
const textVarient = useTextVarient(1200)
const slideInVaiernt = useSlideIn("up", "tween", 20, 1000, 300)
</script>

<template>
  <section class="yPaddings sm:pl-16 pl-6">
    <div
      class="innerWidth mx-auto flex flex-col">
      <div class="text-center sm:text-left flex justify-center item-center flex-col relative z-10">
        <h1

          class="heroHeading"
          v-bind="headingVarient">
          Metaverse
        </h1>

        <div

          class="z-1 flex flex-row justify-center items-center"
          v-bind="textVarient">
          <h1 class="heroHeading">
            Ma
          </h1>

          <div class="heroDText border-double" />

          <h1 class="heroHeading">
            Ness
          </h1>
        </div>

        <div

          v-bind="slideInVaiernt"
          class="relative w-full sm:-mt-[20px] -mt-[12px]">
          <div class="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] rounded-tr-[40px] z-0 -top-[30px]" />

          <img
            src="/images/cover.png"
            alt="cover"
            class="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] rounded-tr-[40px] z-10 relative">

          <a href="#explore">
            <div class="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/images/stamp.png"
                alt="stamp"
                class="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain">
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
