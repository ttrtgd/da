<template>
    <router-link :to="link || '/'" class="relative flex items-end show" :class="{'w-[254px] h-[260px]': size === 'sm', 'w-[520px] h-[260px]': size === 'lg'}">
        <img :src="background" :alt="name" class="w-full h-full">
        <div class="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-black to-transparent" />
        <p class="absolute bottom-2 left-8 z-20 text-white font-bold text-2xl" style="font-family: 'Roboto Flex', sans-serif; ">{{ name }}</p>
    </router-link>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    link?: string;
    background: string;
    size: "sm" | "lg"
}>()
</script>