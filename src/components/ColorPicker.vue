<template>
  <div class="color-picker">
    <ul class="swatches">
      <li
        :key="index"
        v-for="(swatch, index) in swatches"
        :style="{ background: `#${swatch}` }"
        class="swatch"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
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