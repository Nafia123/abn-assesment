<script setup lang="ts">

import type { Cast } from '@/models/Show'

defineProps<{
  item: Cast
}>()

function goToCastInfo(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div
    v-if="item.person"
    @click="goToCastInfo(item.person.url!)"
    class="m-6 grid grid-cols-12 p-5 gap-3 bg-gray-200 dark:bg-gray-700 my-2 rounded shadow-gray-600 hover:scale-95 transition cursor-pointer">
    <div class="col-span-full md:col-span-2">
      <img
        :src="item.person.image ? item.person.image.medium : 'https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'"
        :alt="`poster of ${item.person.name}`" />
    </div>
    <div class="flex flex-col col-span-full md:col-span-6 text-gray-800 dark:text-gray-50">
      <p class="text-xl">{{ item.person.name }} </p>
      <p class="text-xl">Playing as {{ item.character!.name }}</p>
    </div>
    <div class="flex flex-col col-span-full md:col-span-4 text-gray-800 dark:text-gray-50">
      <p class="text-2xl">Actor details:</p>
      <p class="text-xl">{{ item.person.birthday }}</p>
      <p class="text-xl">Gender: {{ item.person.gender }}</p>
      <p class="text-xl">{{ item.person?.country?.name }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>