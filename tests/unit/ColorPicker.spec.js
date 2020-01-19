import { shallowMount } from '@vue/test-utils';
import ColorPicker from '@/components/ColorPicker';
import convert from 'color-convert';

let wrapper = null;

const propsData = {
  swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff']
};

beforeEach(() => (wrapper = shallowMount(ColorPicker, { propsData })))
afterEach(() => wrapper.destroy())

describe('ColorPicker', () => {
  describe('Swatches', () => {
    test('displays each color as an individual swatch', () => {
      const swatches = wrapper.findAll('.swatch')
      propsData.swatches.forEach((swatch, index) => {
        expect(swatches.at(index).attributes().style).toBe(
          `background: rgb(${convert.hex.rgb(swatch).join(', ')});`
        )
      })
    })
  })
})