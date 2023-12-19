<template>
  <div
    v-if="useUi.background === 'coffee_background.gif'"
    class="w-screen h-screen flex flex-col object-cover"
    :style="{
      background: bg,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <Header :isDark="false" />
    <router-view />
  </div>
  <div v-else class="w-screen h-screen flex flex-col object-cover">
    <Header :isDark="false" />
    <router-view
      :style="{
        background: bg,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }"
    />
    <Footer v-show="useUi.background !== 'coffee_background.gif'" />
  </div>
</template>

<script lang="ts" setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useUi } from "./stores/ui";
import { watch, ref } from "vue";

const bg = ref("");

function setBackground() {
  // should fix url paths in css
  const fileName = useUi.background.split(".")[0];
  const fileExt = useUi.background.split(".")[1];
  if (useUi.background === "none") {
    bg.value = "#fff";
  } else if (fileExt === "gif") {
    import(`./assets/pictures/${fileName}.gif`).then((el) => {
      bg.value = `url(${el.default}) no-repeat`;
    });
  } else if (fileExt === "png") {
    import(`./assets/pictures/${fileName}.png`).then((el) => {
      bg.value = `url(${el.default}) no-repeat`;
    });
  } else if (fileExt === "jpg") {
    import(`./assets/pictures/${fileName}.jpg`).then((el) => {
      bg.value = `url(${el.default}) no-repeat`;
    });
  } else if (fileExt === "jpeg") {
    import(`./assets/pictures/${fileName}.jpeg`).then((el) => {
      bg.value = `url(${el.default}) no-repeat`;
    });
  }
}

setBackground();

watch(
  () => useUi.background,
  () => setBackground()
);
</script>
