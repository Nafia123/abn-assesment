<script setup lang="ts">
import AppHeader from '@/components/04-templates/AppHeader.vue'
import { ref } from 'vue'
import { Theme } from '@/models/Theme'
import MainPage from '@/components/MainPage.vue'
import type { Show } from '@/models/Show'
import { fetchTVShowFromId } from '@/service/TVMazeService'
import TVDetailModal from '@/components/03-organisms/TVDetailModal.vue'
import Modal from '@/components/01-atoms/Modal.vue'

const currentTvShow = ref({})
const showModal = ref(false)
const showError = ref(false)
const error = ref(null)

function fetchShowInformation(tvShow: Show): void {
  fetchTVShowFromId(tvShow.id!).then((res) => {
    currentTvShow.value = res
    showModal.value = true
  }).catch(() => {
    showError.value = true
    currentTvShow.value = {}
  })
}

</script>

<template>
  <header>
    <AppHeader @click="fetchShowInformation" />
  </header>

  <main class="min-h-[calc(100vh-74px)] pt-[74px] bg-gray-50 dark:bg-gray-800">
    <MainPage @click="fetchShowInformation"></MainPage>
  </main>
  <teleport to="body">
    <TVDetailModal show-backdrop :item="currentTvShow" :show="showModal" @close="showModal = false" />
    <Modal :show="showError" @close="showError = false">

      <span class="text-red-500"> Something went wrong when fetching the tv-show</span>
    </Modal>

  </teleport>
</template>

<style scoped>

</style>
