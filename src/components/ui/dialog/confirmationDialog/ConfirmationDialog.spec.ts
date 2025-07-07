import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ConfirmationDialog from './ConfirmationDialog.vue'
import Card from '@/components/ui/card/Card.vue'
import Headline from '@/components/ui/headline/Headline.vue'

describe('ConfirmationDialog.vue', () => {
  it('renders title when provided', () => {
    const wrapper = mount(ConfirmationDialog, {
      props: {
        title: 'Confirm action',
        onConfirm: vi.fn(),
      },
    })

    const headline = wrapper.findComponent(Headline)
    expect(headline.exists()).toBe(true)
    expect(headline.text()).toBe('Confirm action')
  })

  it('renders slot content', () => {
    const slotContent = '<p>Are you sure?</p>'
    const wrapper = mount(ConfirmationDialog, {
      props: { onConfirm: vi.fn() },
      slots: {
        default: slotContent,
      },
    })

    expect(wrapper.find('.content').html()).toContain(slotContent)
  })

  it('renders confirm button with default label and calls onConfirm on click', async () => {
    const onConfirm = vi.fn()
    const wrapper = mount(ConfirmationDialog, {
      props: { onConfirm },
    })

    const confirmButton = wrapper.find('button.actionButton')
    expect(confirmButton.exists()).toBe(true)
    expect(confirmButton.text()).toBe('Ok')

    await confirmButton.trigger('click')
    expect(onConfirm).toHaveBeenCalledTimes(1)
  })

  it('renders confirm and cancel buttons with custom labels and calls respective handlers', async () => {
    const onConfirm = vi.fn()
    const onCancel = vi.fn()
    const wrapper = mount(ConfirmationDialog, {
      props: {
        onConfirm,
        onCancel,
        confirmLabel: 'Yes',
        cancelLabel: 'No',
      },
    })

    const buttons = wrapper.findAll('button.actionButton')
    expect(buttons).toHaveLength(2)

    const confirmButton = buttons[0]
    const cancelButton = buttons[1]

    expect(confirmButton.text()).toBe('Yes')
    expect(cancelButton.text()).toBe('No')

    await confirmButton.trigger('click')
    expect(onConfirm).toHaveBeenCalledTimes(1)

    await cancelButton.trigger('click')
    expect(onCancel).toHaveBeenCalledTimes(1)
  })

  it('does not render cancel button if onCancel is not provided', () => {
    const wrapper = mount(ConfirmationDialog, {
      props: {
        onConfirm: vi.fn(),
      },
    })

    const cancelButton = wrapper
      .findAll('button.actionButton')
      .filter((btn) => btn.text() === 'Cancel')
    expect(cancelButton.length).toBe(0)
  })

  it('renders Card component as wrapper', () => {
    const wrapper = mount(ConfirmationDialog, {
      props: { onConfirm: vi.fn() },
    })

    expect(wrapper.findComponent(Card).exists()).toBe(true)
  })
})
