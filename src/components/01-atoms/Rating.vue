<script setup lang="ts">
//@ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiStarHalfFull, mdiStar, mdiStarOutline } from '@mdi/js'

const props = defineProps<{
  rating: number,
  showNumber?: boolean
}>()

const filledStar: Array<any> = []


/*
 I had a bit of a brain fart here, so please ignore this. Probably a better way to do this.
 */
const roundedRating = (Math.round(props.rating * 2) / 4)
for (let i = 1; i < 6; i++) {
  filledStar.push(roundedRating - i >= 0 ? mdiStar : roundedRating - i >= -0.5 ? mdiStarHalfFull : mdiStarOutline)
}
</script>

<template>
  <div class="flex items-center">
    <template v-for="(starIcon, index) in filledStar" :key="index">
      <slot :icon="starIcon">
        <svg-icon type="mdi" class="text-yellow-400" :path="starIcon"></svg-icon>
      </slot>
    </template>
    <template v-if="showNumber">
      <span class="text-gray-900 dark:text-gray-50 px-2">{{ roundedRating }}/5</span>
    </template>
  </div>
</template>

<style scoped>
.star-rating {
  font-size: 24px; /* Adjust size as needed */
}

.star-rating span {
  color: #ccc; /* Default color for empty stars */
}

.star-rating span.filled {
  color: #ff9800; /* Color for filled stars */
}
</style>