<script setup lang="ts">
defineEmits(['close'])
withDefaults(defineProps<{
  show: boolean,
  showBackdrop?: boolean,
  modalSize?: 'lg' | 'xl' | 'md' | '2xl' | '4xl' | 'full'
}>(), {
  modalSize: 'lg'
})
</script>

<template>
  <Transition>
    <Teleport to="body" v-if="show">
      <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
           class="flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full overflow-y-auto max-h-full bg-white dark:bg-gray-700 rounded-2xl max-w-4xl"
             :class="`max-w-${modalSize}` ">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <slot name="header">
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
              </slot>
            </div>
          </div>
          <slot></slot>
          <div v-if="$slots.footer"
               class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
      <div v-if="showBackdrop"
           class="bg-gray-500 w-full h-full left-0 top-0 fixed bg-opacity-20 pointer-events-none z-40"></div>
    </Teleport>

  </Transition>

</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>