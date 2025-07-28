import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginForm from './LoginForm.vue'

describe('LoginForm', () => {
  it('renders login form with email and password fields', () => {
    const wrapper = mount(LoginForm, {
      props: {
        onSubmit: vi.fn(),
      },
    })

    expect(wrapper.text()).toContain('Login')

    const labels = wrapper.findAll('label')
    expect(labels.length).toBe(2)
    expect(labels[0].text()).toBe('Email')
    expect(labels[1].text()).toBe('Password')
  })

  it('updates form data and submits correctly', async () => {
    const onSubmitMock = vi.fn()
    const wrapper = mount(LoginForm, {
      props: {
        onSubmit: onSubmitMock,
      },
    })

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('login@example.com')
    await inputs[1].setValue('password123')

    // Trigger submit event on the Form component
    // The Form component emits 'submit' event with form data
    await wrapper.findComponent({ name: 'Form' }).vm.$emit('submit', {
      email: 'login@example.com',
      password: 'password123',
    })

    expect(onSubmitMock).toHaveBeenCalledTimes(1)
    expect(onSubmitMock).toHaveBeenCalledWith({
      email: 'login@example.com',
      password: 'password123',
    })
  })
})
