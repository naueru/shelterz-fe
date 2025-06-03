import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheFooter from './TheFooter.vue'

describe('TheFooter', () => {
  it('renders a footer element with class "container"', () => {
    const wrapper = mount(TheFooter)
    const footer = wrapper.find('footer.container')
    expect(footer.exists()).toBe(true)
  })
})
