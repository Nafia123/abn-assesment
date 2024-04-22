<script setup lang="ts">

import Rating from '@/components/01-atoms/Rating.vue'
import type { Show } from '@/models/Show'

defineProps<{
  item: Show
}>()
</script>

<template>
  <div
    class="m-6 grid grid-cols-8 p-5 gap-3 bg-gray-200 dark:bg-gray-800 my-2 rounded shadow-gray-600 hover:scale-95 transition">
    <div class="col-span-full justify-self-center md:col-span-1 md:justify-self-start">
      <img
        :src="item.image ? item.image.medium : 'https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'"
        :alt="`poster of ${item.name}`">
    </div>
    <div class="flex flex-col col-span-7 text-gray-800 dark:text-gray-50">
      <p class="text-2xl">{{ item.name }}</p>
      <p class="text-lg italic collapse md:visible " v-html="item.summary">
      </p>
      <template v-if="item.rating && item.rating.average">
        <Rating :rating="item.rating.average" show-number></Rating>
      </template>
      <template v-else>
        <span>No rating available</span>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>