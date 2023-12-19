<template>
  <div class="flex-auto w-full">
    <div class="pl-24 pr-52">
      <table class="w-full">
        <tbody>
          <tr
            v-for="(position, idx) in delicatesiData"
            :key="idx"
            :style="{
              'animation-delay': `${
                position.isTitle === 'mini'
                  ? '0'
                  : position.isTitle === 'big'
                  ? '0'
                  : `${idx * 30}`
              }ms`,
            }"
            class="show"
          >
            <td
              :class="{
                'text-2xl py-3': position.isTitle === 'big',
                'text-md py-2 font-semibold': position.isTitle === 'mini',
              }"
            >
              {{ position.name }}
            </td>
            <td>{{ position.size }}</td>
            <td>{{ position.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    
  </div>
</template>

<script setup lang="ts">
import { useUi } from "../../stores/ui";

import { delicatesiData } from "../../bigData";

useUi.background = "delicates_background.png";
</script>

<style scoped></style>
