<script setup lang="ts">
import TVListItem from '@/components/02-molecules/TVListItem.vue'
import List from '@/components/01-atoms/List.vue'
import type { Genre } from '@/models/Genre'

defineEmits(['click'])
defineProps<{
  item: Genre
}>()


</script>

<template>
  <article class="p-1 md:p-2 lg:p-4 overflow-y-hidden">
        <span class="text-gray-500 pl-2 sticky dark:text-gray-50 text-4xl">
        {{ item.genre }}
        </span>
    <List show-arrows :items="item.items">
      <template #default="{ item }">
        <TVListItem @click="(item) => $emit('click', item)" :item></TVListItem>
      </template>
    </List>
  </article>


</template>

<style scoped>

</style>