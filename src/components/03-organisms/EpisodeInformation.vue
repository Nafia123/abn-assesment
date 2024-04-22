<script setup lang="ts">
import type { Episode } from '@/models/Show'
import List from '@/components/01-atoms/List.vue'
import EpisodeItem from '@/components/02-molecules/EpisodeItem.vue'

defineProps<{
  episodes: Array<Episode>
}>()
</script>

<template>
  <div class="max-h-96 overflow-y-auto">
    <List direction="vertical" :items="episodes">
      <template #default="{item}">
        <EpisodeItem :item="item "></EpisodeItem>
      </template>
    </List>
  </div>

</template>

<style scoped>

</style>