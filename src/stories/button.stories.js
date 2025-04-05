import { fn } from '@storybook/test'
import Button from '@/components/button.vue'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
}

export const Default = {
  args: {
    text: 'Default',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
}
