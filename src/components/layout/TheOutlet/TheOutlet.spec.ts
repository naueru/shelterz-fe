import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheOutlet from './TheOutlet.vue'

describe('TheOutlet', () => {
  it('renders a main element with class "container" and contains RouterView', () => {
    const wrapper = mount(TheOutlet)

    // Check that main.container exists
    const main = wrapper.find('main.container')
    expect(main.exists()).toBe(true)

    // Check that RouterView component is rendered inside
    const routerView = wrapper.findComponent({ name: 'RouterView' })
    expect(routerView.exists()).toBe(true)
  })
})
