import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from './Card.vue'

describe('Card', () => {
  it('renders default slot content', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p class="body-content">This is the card body</p>',
      },
    })

    expect(wrapper.find('.body-content').exists()).toBe(true)
    expect(wrapper.find('.body-content').text()).toBe('This is the card body')
  })

  it('renders header slot content when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<h2 class="card-header">Card Header</h2>',
      },
    })

    expect(wrapper.find('.card-header').exists()).toBe(true)
    expect(wrapper.find('.card-header').text()).toBe('Card Header')
  })

  it('does not render header section if header slot is not provided', () => {
    const wrapper = mount(Card)
    expect(wrapper.find('header').exists()).toBe(false)
  })

  it('renders footer slot content when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        footer: '<div class="card-footer">Card Footer</div>',
      },
    })

    expect(wrapper.find('.card-footer').exists()).toBe(true)
    expect(wrapper.find('.card-footer').text()).toBe('Card Footer')
  })

  it('does not render footer section if footer slot is not provided', () => {
    const wrapper = mount(Card)
    expect(wrapper.find('footer').exists()).toBe(false)
  })
})
