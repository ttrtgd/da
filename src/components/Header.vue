<template>
  <header
    class="w-full flex items-center justify-between px-24 py-2 transition-all"
    :class="{
      'text-black': isDark,
      'text-white': !isDark,
    }"
  >
    <router-link to="/"
      ><Logo :isDark="!isDark" /></router-link>
    <router-link active-class="text-[#804030]" to="/menu">МЕНЮ</router-link>
    <router-link active-class="text-[#804030]" to="/events"
      >СОБЫТИЯ</router-link
    >
    <router-link active-class="text-[#804030]" to="/contacts"
      >КОНТАКТЫ</router-link
    >

  </header>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { useUi } from "../stores/ui";
import Logo from "./Logo.vue";

const isDark = ref(useUi.background !== 'coffee_background.gif');

watch(() => useUi.background, () => isDark.value = useUi.background !== 'coffee_background.gif')
</script>
