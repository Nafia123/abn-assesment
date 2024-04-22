<script setup lang="ts" generic="T">
defineProps<{
  items: Array<T>,
  hideScrollbar?: boolean,
  showArrows?: boolean,
  loading?: boolean,
  direction?: 'horizontal' | 'vertical',
}>()
</script>

<template>
  <div>
    <ul class="flex scroll-smooth overflow-x-scroll"
        :class="{'hide-scrollbar' : hideScrollbar, 'flex-col': direction == 'vertical'}"
    >
      <template v-for="item in items">
        <slot :item="item">
        </slot>
      </template>
    </ul>
    <slot v-if="items.length == 0 && !loading" name="empty"></slot>
    <slot v-if="loading" name="loading">
      <span>Loading...</span>
    </slot>
  </div>

</template>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>