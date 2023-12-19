<template>
  <div class="flex-auto overflow-y-scroll">
    <div class="flex flex-col gap-10 px-24 text-2xl">
      <p class="show">КОНТАКТЫ</p>
      <div class="flex justify-between items-center gap-10">
        <img
          :src="`./pictures/map.png`"
          alt="Map"
          class="w-1/2 h-1/3 show"
          style="animation-delay: 200ms"
        />
        <div class="flex flex-col gap-3 text-center">
          <p class="show" style="animation-delay: 300ms">НАШ АДРЕС</p>
          <p class="show" style="animation-delay: 400ms">
            ул. Горького, 46, Канск, Красноярский край, 663600
          </p>
          <p class="show" style="animation-delay: 500ms">ГРАФИК РАБОТЫ</p>
          <p class="show" style="animation-delay: 600ms">
            Ежедневно с 8:00 до 22:00
          </p>
          <p class="show" style="animation-delay: 700ms">ТЕЛЕФОН</p>
          <p class="show" style="animation-delay: 800ms">89029465352</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "../stores/ui";
useUi.background = "none";
</script>
