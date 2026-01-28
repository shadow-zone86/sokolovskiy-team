import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from './Button.vue'

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
    href: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof UiButton>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind="args">Связаться</UiButton>',
  }),
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind="args">Назад</UiButton>',
  }),
}

export const AsLink: Story = {
  args: {
    variant: 'primary',
    href: '#hero',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind="args">На главную</UiButton>',
  }),
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args }
    },
    template: '<UiButton v-bind="args">Недоступно</UiButton>',
  }),
}
