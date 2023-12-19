<template>
  <div
    class="flex gap-4 items-center text-3xl transition-all"
    :class="{
      'text-black': !isDark,
      'text-white': isDark,
    }"
  >
    <p>COFFEE</p>
    <img v-if="isDark" :src="`./pictures/logo_light.png`" alt="Coffee time light logo">
    <img v-else :src="`./pictures/logo_dark.png`" alt="Coffee time light logo">
    <p>TIME</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean;
}>();
</script>

<style></style>
