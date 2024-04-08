import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SmallButton from '../components/atoms/Button/SmallButton';

const meta: Meta<typeof SmallButton> = {
  title: 'Components/Button',
  component: SmallButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallBtn: Story = {
  args: {
    type: 'button',
    children: 'button',
    onClick: fn(),
    state: true,
  },
};
