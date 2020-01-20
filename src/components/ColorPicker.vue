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
import CheckIcon from '@/assets/checkmark.svg'
import { rgb, hex, hsl } from '@/utils/color'

const modes = { rgb, hex, hsl }

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
      const activeColor = this.swatches[this.activeSwatch]
      const activeMode = this.colorModes[this.activeMode]
      return modes[activeMode](activeColor)
    }
  }
};
</script>

<style>
</style>