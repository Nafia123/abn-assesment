<script setup lang="ts">
import type { Show } from '@/models/Show'
import Rating from '@/components/01-atoms/Rating.vue'

defineProps<{
  item: Show
}>()

defineEmits(['click'])
</script>

<template>
  <div
    @click="$emit('click' , item)"
    class="flex flex-col select-none  rounded mx-1 md:mx-4 bg-gray-900 p-4 hover:drop-shadow hover:scale-105 transition duration-300 cursor-pointer">
    <img
      class="max-w-full md:max-w-sm lg:max-w-md shadow-2xl dark:shadow-md dark:shadow-gray-700  "
      :src="item.image ? item.image.original : 'https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'"
      :alt="item.name">
    <div class="my-4">
      <p class="text-gray-800 dark:text-gray-50">{{ item.name }}</p>
      <Rating v-if="item.rating && item.rating.average" show-number :rating="item.rating.average!" />
    </div>
  </div>

</template>

<style scoped>

</style>