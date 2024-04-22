<script setup lang="ts">
import SearchDialog from '@/components/03-organisms/SearchDialog.vue'

defineEmits(['click'])
</script>

<template>
  <nav
    class="z-50 border-gray-200 px-4 lg:px-6 py-2.5 top-0 w-full backdrop-blur-md fixed drop-shadow-2xl">
    <div class="flex justify-center w-full">
      <SearchDialog @click="(item) => $emit('click', item)"></SearchDialog>
    </div>
  </nav>
</template>

<style scoped>

</style>