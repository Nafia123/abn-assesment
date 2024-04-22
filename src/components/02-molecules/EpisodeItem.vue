<script setup lang="ts">

import Rating from '@/components/01-atoms/Rating.vue'
import type { Episode } from '@/models/Show'

defineProps<{
  item: Episode
}>()

function goToEpisodeInfo(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div
    @click="goToEpisodeInfo(item.url!)"
    class="m-6 grid grid-cols-5 p-5 gap-3 bg-gray-200 dark:bg-gray-700 my-2 rounded shadow-gray-600 hover:scale-95 transition cursor-pointer">
    <div class="col-span-full md:col-span-2">
      <img
        :src="item.image ? item.image.medium : 'https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'"
        :alt="`poster of ${item.name}`">
    </div>
    <div class="flex flex-col col-span-full md:col-span-3 text-gray-800 dark:text-gray-50">
      <p class="text-2xl"><span class="italic"> {{ item.season }}X{{ item.number }}</span> - {{ item.name }} </p>
      <p class="text-lg italic" v-html="item.summary">
      </p>
      <template v-if="item.rating && item.rating.average">
        <Rating :rating="item.rating.average" show-number></Rating>
      </template>
      <template v-else>
        <p>No rating available</p>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>