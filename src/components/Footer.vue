<template>
  <footer class="w-full flex flex-col items-center text-center gap-5 pb-5 show-up">
    <div class="w-full border-2 border-black" />
    <div class="flex flex-col text-xl" style="font-family: 'Roboto Flex', sans-serif;">
      <p class="font-semibold">С ЛЮБОВЬЮ ВАШ</p>
      <p class="font-extrabold">COFFEE TIME</p>
    </div>
    <div class="flex gap-10">
      <img class="w-[50px] h-[50px]" :src="`./pictures/icons/tg.svg`" alt="tg" />
      <img class="w-[50px] h-[50px]" :src="`./pictures/icons/vk.svg`" alt="vk" />
      <img class="w-[50px] h-[50px]" :src="`./pictures/icons/instagram.svg`" alt="instagram" />
    </div>
  </footer>
</template>

<style scoped>

@keyframes showUp {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.show-up {
  animation: showUp 0.5s ease-out;
}

</style>