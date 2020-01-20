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
    <div class="color-modes">
      <button
        :key="index"
        v-for="(mode, index) in colorModes"
        class="color-mode"
        :class="[{ active: index === activeMode }, `color-mode-${mode}`]"
        @click="activeMode = index"
      >{{ mode }}</button>
    </div>
    <div class="color-code">{{ activeCode }}</div>
  </div>
</template>

<script>
import convert from 'color-convert'
import CheckIcon from '@/assets/checkmark.svg'
export default {
  components: {
    CheckIcon,
  },
  data() {
    return {
      activeSwatch: 0,
      activeMode: 0,
      colorModes: ['hex', 'rgb', 'hsl']
    }
  },
  props: {
    swatches: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    activeCode() {
      return this[this.activeModeValue]
    },
    activeColorValue() {
      return this.swatches[this.activeSwatch]
    },
    activeModeValue() {
      return this.colorModes[this.activeMode]
    },
    hex() {
      return `#${this.activeColorValue}`
    },
    hsl() {
      const hslColor = convert.hex.hsl(this.activeColorValue)
      return `${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%`
    }
  },
};
</script>

<style>
</style>