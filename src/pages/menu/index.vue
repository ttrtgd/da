<template>
  <div class="flex-auto flex flex-col gap-3 items-center">
    <p class="text-[40px] show">МЕНЮ</p>
    <div class="flex gap-3">
      <MenuCard
        size="sm"
        name="ЧАЙ"
        link="/menu/tea"
        :background="'./pictures/cards/teaCard.png'"
        style="animation-delay: 0ms"
      />
      <MenuCard
        size="sm"
        name="КОФЕ"
        link="/menu/coffee"
        :background="'./pictures/cards/coffeeCard.png'"
        style="animation-delay: 100ms"
      />
      <MenuCard
        size="lg"
        name="СОГРЕВАЮЩИЕ НАПИТКИ"
        link="/menu/sogNap"
        :background="'./pictures/cards/sogrevaushieNapCard.png'"
        style="animation-delay: 200ms"
      />
    </div>
    <div class="flex gap-3">
      <MenuCard
        size="lg"
        name="МОЛОЧНЫЕ КОКТЕЙЛИ"
        link="/menu/milkShakes"
        :background="'./pictures/cards/milkShakesCard.png'"
        style="animation-delay: 300ms"
      />
      <MenuCard
        size="sm"
        name="ЛИМОНАДЫ"
        link="/menu/limonades"
        :background="'./pictures/cards/limonadesCard.png'"
        style="animation-delay: 400ms"
      />
      <MenuCard
        size="sm"
        name="СМУЗИ"
        link="/menu/milkShakes"
        :background="'./pictures/cards/smoozyCard.png'"
        style="animation-delay: 500ms"
      />
    </div>
    <div class="flex gap-3">
      <MenuCard
        size="sm"
        name="САЛАТЫ"
        link="/menu/salates"
        :background="'./pictures/cards/salatesCard.png'"
        style="animation-delay: 600ms"
      />
      <MenuCard
        size="sm"
        name="ПАСТЫ"
        link="/menu/salates"
        :background="'./pictures/cards/pastesCard.png'"
        style="animation-delay: 700ms"
      />
      <MenuCard
        size="lg"
        name="ВАФЛИ"
        link="/menu/salates"
        :background="'./pictures/cards/vaphliCard.png'"
        style="animation-delay: 800ms"
      />
    </div>
    <div class="flex gap-3">
      <MenuCard
        size="lg"
        name="КИСАДИЛЬИ"
        link="/menu/salates"
        :background="'./pictures/cards/kisadiliCard.png'"
        style="animation-delay: 900ms"
      />
      <MenuCard
        size="sm"
        name="СЭНДВИЧИ"
        link="/menu/salates"
        :background="'./pictures/cards/sandwichesCard.png'"
        style="animation-delay: 1000ms"
      />
      <MenuCard
        size="sm"
        name="ЗАКУСКИ"
        link="/menu/salates"
        :background="'./pictures/cards/zakuskiCard.png'"
        style="animation-delay: 1100ms"
      />
    </div>
    <div class="flex gap-3">
      <MenuCard
        size="sm"
        name="ДЕСЕРТЫ"
        link="/menu/deserti"
        :background="'./pictures/cards/desertiCard.png'"
        style="animation-delay: 1200ms"
      />
      <MenuCard
        size="sm"
        name="ДЕЛИКАТЕСЫ"
        link="/menu/delicatesi"
        :background="'./pictures/cards/delicatesiCard.png'"
        style="animation-delay: 1300ms"
      />
      <MenuCard
        size="lg"
        name="ПРОДУКЦИЯ"
        link="/menu/produkti"
        :background="'./pictures/cards/produktiCard.png'"
        style="animation-delay: 1400ms"
      />
    </div>

    
  </div>
</template>

<script setup lang="ts">
import MenuCard from "../../components/MenuCard.vue";

import { useUi } from "../../stores/ui";

useUi.background = "none";
</script>
