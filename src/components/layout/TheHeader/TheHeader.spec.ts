import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHeader from './TheHeader.vue'
import Logo from '@/components/icons/logo.vue'

describe('TheHeader', () => {
  it('renders header container and Logo component with correct sizeFactor prop', () => {
    const wrapper = mount(TheHeader)

    // Check header container exists
    const header = wrapper.find('header.theHeaderContainer')
    expect(header.exists()).toBe(true)

    // Check h1.title exists
    const title = wrapper.find('h1.theHeaderTitle')
    expect(title.exists()).toBe(true)

    // Check that Logo component is rendered inside the wrapper div
    const logoWrapper = wrapper.find('div.theHeaderWrapper')
    expect(logoWrapper.exists()).toBe(true)

    const logo = wrapper.findComponent(Logo)
    expect(logo.exists()).toBe(true)

    // Check that Logo receives the correct sizeFactor prop
    expect(logo.props('sizeFactor')).toBe(0.4)
  })
})
