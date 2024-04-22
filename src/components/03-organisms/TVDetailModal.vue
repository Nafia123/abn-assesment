<script setup lang="ts">
//@ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'

import Modal from '@/components/01-atoms/Modal.vue'
import type { Show } from '@/models/Show'
import Rating from '@/components/01-atoms/Rating.vue'
import EpisodeInformation from '@/components/03-organisms/EpisodeInformation.vue'
import ExpandElement from '@/components/02-molecules/ExpandElement.vue'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
import CastInformation from '@/components/03-organisms/CastInformation.vue'

defineEmits(['close'])
defineProps<{ item: Show, show: boolean }>()

function goToMoreInfoPage(url: string) {
  window.open(url, '_blank')
}

</script>

<template>
  <Modal :show @close="$emit('close')" modal-size="4xl">
    <template #header>
      <div>
        <span class="text-3xl text-gray-800 dark:text-gray-50">{{ item.name }}</span>
      </div>
      <button type="button"
              @click="$emit('close')"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal">
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
    </template>
    <template #default>
      <div class="grid grid-cols-5 justify-between items-end p-2 text-gray-800 dark:text-gray-50">
        <img
          class="col-span-5 md:col-span-1"
          :src="item.image ? item.image.medium : 'https://as2.ftcdn.net/v2/jpg/04/70/29/97/1000_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'"
          :alt="`poster of ${item.name}`">
        <div class="ml-2 col-span-5 md:col-span-4">
          <p class="text-lg">Genres: <span
            class="italic"> {{ item.genres ? item.genres.join(', ') : 'No known genres' }}</span></p>
          <template v-if="item.rating && item.rating.average">
            <Rating :rating="item.rating.average" show-number></Rating>
          </template>
          <template v-else>
            <span>No rating available</span>
          </template>
          <span class="text-2xl">Summary:</span>
          <p class="text-lg italic" v-html="item.summary">
          </p>
        </div>
      </div>
      <div class="flex flex-col col-span-7 text-gray-800 dark:text-gray-50 drop-shadow-2xl">
        <h2 class="text-xl">Status:</h2>
        <p class="italic">{{ item.status }}</p>
        <template v-if="item.status != 'ended' && item.schedule && item.schedule.time">
          <p class="text-2xl">Schedule:</p>
          <p>Time: {{ item.schedule.time }}</p>
          <p>Runs on {{ item.schedule.days!.join(', ') }}</p>
        </template>
      </div>
      <div class="flex flex-col col-span-7 text-gray-800 dark:text-gray-50 drop-shadow-2xl bg-gray-800 rounded mb-1">
        <ExpandElement v-if="item._embedded">
          <template #activator="{ props, isActive}">

            <div class="flex justify-between cursor-pointer p-2 items-center rounded" v-bind="props">
                <span class="text-2xl text-left">Episodes:
                </span>
              <svg-icon type="mdi" class="text-gray-50"
                        :path="isActive ? mdiChevronDown :  mdiChevronUp"></svg-icon>
            </div>
          </template>
          <EpisodeInformation :episodes="item._embedded.episodes!"></EpisodeInformation>
        </ExpandElement>
      </div>
      <div class="flex flex-col col-span-7 text-gray-800 dark:text-gray-50 drop-shadow-2xl bg-gray-800">
        <ExpandElement v-if="item._embedded">
          <template #activator="{ props, isActive}">

            <div class="flex justify-between cursor-pointer p-2 rounded items-center" v-bind="props">
                <span class="text-2xl text-left">People:
                </span>
              <svg-icon type="mdi" class="text-gray-50"
                        :path="isActive ? mdiChevronDown :  mdiChevronUp"></svg-icon>
            </div>
          </template>
          <CastInformation :episodes="item._embedded.cast!"></CastInformation>
        </ExpandElement>
      </div>
    </template>
    <template #footer>
      <button type="button"
              @click="goToMoreInfoPage(item.url!)"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        More information
      </button>
    </template>
  </Modal>
</template>

<style scoped>
</style>