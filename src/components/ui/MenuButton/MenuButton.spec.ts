import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MenuButton from './MenuButton.vue'

describe('MenuButton', () => {
  it('renders properly with label and to props', async () => {
    const wrapper = mount(MenuButton, {
      props: {
        label: 'button label',
        to: '/some-path',
      },
    })

    expect(wrapper.text()).toContain('button label')

    const routerLink = wrapper.findComponent({ name: 'RouterLink' })
    expect(routerLink.exists()).toBe(true)
    expect(routerLink.props('to')).toBe('/some-path')
  })
})
