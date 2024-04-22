<script setup lang="ts">
import { reactive, ref } from 'vue'
import { onClickOutside, useElementBounding } from '@vueuse/core'

defineProps<{
  showBackdrop?: boolean
}>()
const isActive = reactive({ value: false })

const target = ref<HTMLInputElement | null>(null)
const container = ref<HTMLInputElement | null>(null)

onClickOutside(target, () => isActive.value = false)

const { bottom, left, width }
  = useElementBounding(container)

const targetBounds
  = useElementBounding(target)

</script>

<template>
  <div ref="container">
    <slot name="activator" :props="{onClick: () => isActive.value = true}">
    </slot>

    <!--  Create computed for left position -->
    <transition>
      <div v-if="isActive.value" ref="target" class="fixed"
           :style="{ top: bottom + 'px' , left: (left + (width/2)) - (targetBounds.width.value / 2)    + 'px' }">
        <slot :isActive="isActive"></slot>
      </div>
    </transition>
  </div>
  <Teleport to="body" v-if="showBackdrop && isActive.value">
    <div class="bg-white w-full h-full left-0 top-0 fixed bg-opacity-5 pointer-events-none z-40"></div>
  </Teleport>
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