import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Spinner from './Spinner.vue'

describe('Spinner.vue', () => {
  it('renders a span with class "spinner"', () => {
    const wrapper = mount(Spinner)
    const span = wrapper.find('span.spinner')
    expect(span.exists()).toBe(true)
  })
})
