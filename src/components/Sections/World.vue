<script setup lang="ts">
const fadeInVarient = useFadeIn("up", "tween", 300, 1000)
</script>

<template>
  <section class="paddings relative z-10">
    <div class="innerWidth mx-auto flex flex-col">
      <TypingText
        title="| People on the World"
        class="text-center" />

      <TitleText class="text-center">
        Track friends around you and invite them to play together in the same
        world
      </TitleText>

      <div

        v-bind="fadeInVarient"
        class="relative mt-[68px] flex w-full h-[550px]">
        <img
          src="/images/map.png"
          alt="map"
          class="w-full h-full object-cover">

        <div class="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="/images/people-01.png"
            alt="people"
            class="w-full h-full">
        </div>

        <div class="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="/images/people-02.png"
            alt="people"
            class="w-full h-full">
        </div>

        <div class="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="/images/people-03.png"
            alt="people"
            class="w-full h-full">
        </div>
      </div>
    </div>
  </section>
</template>
