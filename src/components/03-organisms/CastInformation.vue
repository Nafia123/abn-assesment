<script setup lang="ts">
import List from '@/components/01-atoms/List.vue'
import CastItem from '@/components/02-molecules/CastItem.vue'
import type { Cast } from '@/models/Show'

defineProps<{
  episodes: Array<Cast>
}>()
</script>

<template>
  <div class="max-h-96 overflow-y-auto">
    <List direction="vertical" :items="episodes">
      <template #default="{item}">
        <CastItem :item="item "></CastItem>
      </template>
    </List>
  </div>

</template>

<style scoped>

</style>