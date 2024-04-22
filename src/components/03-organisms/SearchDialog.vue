<script setup lang="ts">

import Dialog from '@/components/01-atoms/Dialog.vue'
import SearchInput from '@/components/01-atoms/SearchInput.vue'
import { searchTVShows } from '@/service/TVMazeService'
import { ref } from 'vue'
import type { SearchResponse } from '@/models/SearchResponse'
import Loader from '@/components/01-atoms/Loader.vue'
import List from '@/components/01-atoms/List.vue'
import TVSearchItem from '@/components/02-molecules/TVSearchItem.vue'

defineEmits(['click'])

const tvShows = ref<Array<SearchResponse>>([])
const loading = ref(false)

async function searchToTVShow(input: string) {
  loading.value = true
  searchTVShows(input).then((res) => {
    tvShows.value = res
  }).finally(() => {
    loading.value = false
  })
}


</script>

<template>
  <div class="max-w-xl w-full">
    <Dialog show-backdrop>
      <template #activator="{ props }">
        <SearchInput @search="searchToTVShow" :input-props="{ placeholder: 'Search for a tv-show' }" v-bind="props" />
      </template>
      <template #default="{ isActive }">
        <div
          class="select-none cursor-pointer mb-4 max-h-[calc(100vh-10rem)] max-w-screen-xl overflow-y-auto overflow-x-visible bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
          <List :items="tvShows" :loading direction="vertical">
            <template #default="{ item }">
              <TVSearchItem :item="item.show" @click="() => {isActive.value = false; $emit('click', item.show)}" />
            </template>

            <template #empty>
              <div class="flex justify-center min-w-96 p-10">
                <p class="text-xl text-gray-800 dark:text-gray-50 select-none">Start Searching</p>
              </div>
            </template>

            <template #loading>
              <div class="flex justify-center">
                <p class="text-xl text-gray-800 dark:text-gray-50">
                  <Loader></Loader>
                </p>
              </div>
            </template>
          </List>
        </div>
      </template>
    </Dialog>

  </div>

</template>

<style scoped>

</style>