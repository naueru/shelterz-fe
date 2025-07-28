import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Headline from './Headline.vue'

describe('Headline', () => {
  it('renders an h3 with class "headlineContainer" and displays slot content', () => {
    const slotContent = 'Headline content'
    const wrapper = mount(Headline, {
      slots: {
        default: slotContent,
      },
    })

    const h3 = wrapper.find('h3.headlineContainer')
    expect(h3.exists()).toBe(true)
    expect(h3.text()).toBe(slotContent)
  })
})
