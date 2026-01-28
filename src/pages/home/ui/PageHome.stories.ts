import type { Meta, StoryObj } from '@storybook/vue3'
import PageHome from './PageHome.vue'

const meta: Meta<typeof PageHome> = {
  component: PageHome,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PageHome>

export const Default: Story = {}
