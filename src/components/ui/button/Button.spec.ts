import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/ui/button/Button.vue' // adjust path if needed
import Spinner from '@/components/ui/spinner/Spinner.vue'

describe('Button.vue', () => {
  it('renders slot content when not loading', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.findComponent(Spinner).exists()).toBe(false)
  })

  it('renders Spinner when loading is true', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.findComponent(Spinner).exists()).toBe(true)
    // Slot content should not be rendered when loading
    expect(wrapper.text()).not.toContain('Click me')
  })

  it('applies disabled attribute when disabled or loading', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()

    await wrapper.setProps({ disabled: false, loading: true })
    expect(wrapper.attributes('disabled')).toBeDefined()

    await wrapper.setProps({ disabled: false, loading: false })
    expect(wrapper.attributes('disabled')).toBeUndefined()
  })

  it('applies secondary class when secondary prop is true', () => {
    const wrapper = mount(Button, {
      props: { secondary: true },
    })
    expect(wrapper.classes()).toContain('secondaryButton')
  })

  it('applies loading and disabled classes correctly', async () => {
    const wrapper = mount(Button, {
      props: { loading: true, disabled: true },
    })
    expect(wrapper.classes()).toContain('butonLoading')
    expect(wrapper.classes()).toContain('butonDisabled')

    await wrapper.setProps({ loading: false, disabled: false })
    expect(wrapper.classes()).not.toContain('butonLoading')
    expect(wrapper.classes()).not.toContain('butonDisabled')
  })

  it('emits click event when clicked and not disabled or loading', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('does not emit click event when loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
