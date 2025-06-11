import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Field from './Field.vue'

describe('Field', () => {
  it('renders properly with label and name props', () => {
    const wrapper = mount(Field, {
      props: {
        label: 'Username',
        name: 'username',
        modelValue: '',
      },
    })

    // Check label element
    const label = wrapper.find('label')
    expect(label.exists()).toBeTruthy()
    expect(label.text()).toBe('Username')
    expect(label.attributes('for')).toBe('field_username')

    // Check input element and attributes
    const input = wrapper.find('input')
    expect(input.exists()).toBeTruthy()
    expect(input.attributes('id')).toBe('field_username')
    expect(input.attributes('name')).toBe('username')
    // Since type is optional and not provided, it should default to "text" or be empty
    expect(input.attributes('type')).toBeUndefined()
    expect(input.element.value).toBe('')
  })

  it('sets input type when provided', () => {
    const wrapper = mount(Field, {
      props: {
        label: 'Password',
        name: 'password',
        modelValue: '',
        type: 'password',
      },
    })

    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('password')
  })

  it('emits update:modelValue on input', async () => {
    const wrapper = mount(Field, {
      props: {
        label: 'Email',
        name: 'email',
        modelValue: '',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('test@example.com')

    // Assert the component emitted the update event with the new value
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['test@example.com'])
  })
})
