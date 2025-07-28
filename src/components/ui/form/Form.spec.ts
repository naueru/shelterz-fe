import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Form from './Form.vue'

describe('Form', () => {
  const fields = [
    { label: 'Email', name: 'email' },
    { label: 'Password', name: 'password' },
  ]

  it('renders fields and title', () => {
    const wrapper = mount(Form, {
      props: {
        fields,
        modelValue: { email: '', password: '' },
        title: 'Test Form',
      },
    })

    expect(wrapper.text()).toContain('Test Form')

    const labels = wrapper.findAll('label')
    expect(labels.length).toBe(fields.length)
    expect(labels[0].text()).toBe('Email')
    expect(labels[1].text()).toBe('Password')
  })

  it('updates modelValue when input changes', async () => {
    const wrapper = mount(Form, {
      props: {
        fields,
        modelValue: { email: '', password: '' },
      },
    })

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('test@example.com')
    await inputs[1].setValue('secret')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()

    // The last emitted value should contain the updated form data
    const emitted = wrapper.emitted('update:modelValue')! as Array<[Record<string, string>]>
    const lastValue = emitted[emitted.length - 1][0]
    expect(lastValue.email).toBe('test@example.com')
    expect(lastValue.password).toBe('secret')
  })

  it('emits submit event with form data', async () => {
    const wrapper = mount(Form, {
      props: {
        fields,
        modelValue: { email: '', password: '' },
      },
    })

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('user@example.com')
    await inputs[1].setValue('mypassword')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')).toBeTruthy()
    const submitPayload = (wrapper.emitted('submit')! as Array<[Record<string, string>]>)[0][0]
    expect(submitPayload.email).toBe('user@example.com')
    expect(submitPayload.password).toBe('mypassword')
  })
})
