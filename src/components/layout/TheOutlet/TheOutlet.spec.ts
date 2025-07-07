import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheOutlet from './TheOutlet.vue'
import { RouterView } from 'vue-router'

describe('TheOutlet', () => {
  it('renders a main element with class "outletContainer" and contains RouterView', () => {
    const wrapper = mount(TheOutlet, {
      global: {
        stubs: {
          RouterView: true,
        },
      },
    })

    const main = wrapper.find('main.outletContainer')
    expect(main.exists()).toBe(true)

    const routerView = wrapper.findComponent(RouterView)
    expect(routerView.exists()).toBe(true)
  })
})
