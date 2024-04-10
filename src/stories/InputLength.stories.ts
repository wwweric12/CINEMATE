import type { Meta, StoryObj } from '@storybook/react';
import InputLength from '../components/atoms/InputLength';

const meta: Meta<typeof InputLength> = {
  title: 'Components/Input',
  component: InputLength,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLngh: Story = {
  args: {
    maxLength: 999,
    length: 0,
  },
};
