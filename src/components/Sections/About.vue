<script setup lang="ts">
const textFadeIn = useFadeIn("up", "tween", 200, 1000)
const arrowFadeIn = useFadeIn("up", "tween", 200, 1000)
</script>

<template>
  <section class="paddings relative z-10">
    <div class="gradient-02 z-0" />

    <div
      class="innerWidth mx-auto flexCenter flex-col">
      <TypingText
        title="| About Metaversus"
        class="text-center" />

      <p

        v-bind="textFadeIn"
        class="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <span class="font-extrabold text-white">Metaverse</span> is a new

        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the

        <span class="font-extrabold text-white">
          madness of the metaverse
        </span>

        of today, using only

        <span class="font-extrabold text-white">VR</span> devices you can

        easily explore the metaverse world you want, turn your dreams into
        reality. Let's

        <span class="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </p>

      <img

        v-bind="arrowFadeIn"
        src="/images/arrow-down.svg"
        alt="arrow_down"
        class="w-[18px] h-[28px] object-contain mt-[28px]">
    </div>
  </section>
</template>

<style></style>
