<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)

function changeActive() {
  isActive.value = !isActive.value
}
</script>

<template>
  <div ref="container">
    <slot name="activator" :props="{onClick: () => changeActive()}" :isActive="isActive">
    </slot>
    <transition>
      <template v-if="isActive">
        <slot></slot>
      </template>

    </transition>
  </div>

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