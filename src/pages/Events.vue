<template>
  <div class="flex-auto">
    <div class="flex flex-col gap-10 px-24 text-2xl">
      <p>СОБЫТИЯ</p>
      <div class="flex justify-between gap-10 show">
        <img
          :src="`./pictures/events/event1.jpg`"
          alt="Читакль"
          class="max-w-[300px]"
        />
        <div class="flex flex-col gap-10 justify-center">
          <h1 class="text-center">Читакль</h1>
          <p>
            25.11.2023 у нас в кофейне состоялась Премьера Читакля «Нервные
            люди». Мы с нетерпением ждали и наконец свершилось! В неописуемый
            восторг ввергли всех своей игрой артисты Алексей Адаменко, Полина
            Белянина и Сергей Ботвенко. Режиссёр постановки - Анастасия
            Неупокоева.
          </p>
        </div>
      </div>
      <div
        class="flex justify-between gap-10 show"
        style="animation-delay: 300ms"
      >
        <img
          :src="`./pictures/events/event2.jpg`"
          alt="Внимание"
          class="max-w-[300px]"
        />
        <div class="flex flex-col gap-10 justify-center">
          <h1 class="text-center">Внимание</h1>
          <p>
            Дорогие наши гости, проект «Театральное кафе» продолжается и уже
            25.11 в 19:00 вас ждёт Премьера Читакля «Нервные люди». Билеты можно
            приобрести только в кассе театра.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUi } from "../stores/ui";
useUi.background = "none";
</script>
