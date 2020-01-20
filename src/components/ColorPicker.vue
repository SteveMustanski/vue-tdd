<template>
  <div class="color-picker">
    <ul class="swatches">
      <li
        :key="index"
        v-for="(swatch, index) in swatches"
        :style="{ background: `#${swatch}` }"
        class="swatch"
        :class="{ 'active': index === activeSwatch }"
        @click='activeSwatch = index'
      >
      <CheckIcon />
      </li>
    </ul>
  </div>
</template>

<script>
import CheckIcon from '@/assets/checkmark.svg'
export default {
  components: {
    CheckIcon,
  },
  data() {
    return {
      activeSwatch: 0
    }
  },
  props: {
    swatches: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style>
</style>