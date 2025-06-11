import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SignupForm from './SignupForm.vue'

describe('SignupForm', () => {
  it('renders signup form with all fields', () => {
    const wrapper = mount(SignupForm)

    expect(wrapper.text()).toContain('Sign Up')

    const labels = wrapper.findAll('label')
    expect(labels.length).toBe(4)
    expect(labels[0].text()).toBe('Username')
    expect(labels[1].text()).toBe('Email')
    expect(labels[2].text()).toBe('Password')
    expect(labels[3].text()).toBe('Confirm Password')
  })

  it('updates form data and submits correctly', async () => {
    const wrapper = mount(SignupForm)

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('newuser')
    await inputs[1].setValue('newuser@example.com')
    await inputs[2].setValue('pass1234')
    await inputs[3].setValue('pass1234')

    const consoleSpy = vi.spyOn(console, 'log')

    await wrapper.find('form').trigger('submit.prevent')

    expect(consoleSpy).toHaveBeenCalledWith('Signup submitted:', {
      username: 'newuser',
      email: 'newuser@example.com',
      password: 'pass1234',
      confirmPassword: 'pass1234',
    })

    consoleSpy.mockRestore()
  })
})
