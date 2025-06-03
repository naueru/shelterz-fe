import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheMenu from './TheMenu.vue'

describe('TheMenu', () => {
  it('renders the aside container and all MenuButton components', () => {
    const wrapper = mount(TheMenu)

    // Check the aside container exists with class "container"
    const aside = wrapper.find('aside.container')
    expect(aside.exists()).toBe(true)

    // Check the nav.menu exists inside the aside
    const nav = aside.find('nav.menu')
    expect(nav.exists()).toBe(true)

    // Check that there are 9 MenuButton components rendered
    const menuButtons = wrapper.findAllComponents({ name: 'MenuButton' })
    expect(menuButtons.length).toBe(9)

    // Optionally, check the label and to props of the first MenuButton
    const firstButton = menuButtons[0]
    expect(firstButton.props('label')).toBe('Dashboard')
    expect(firstButton.props('to')).toBe('/')
  })
})
