import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MediumButton from '../components/Button/MediumButton';

const meta: Meta<typeof MediumButton> = {
  title: 'Components/Button',
  component: MediumButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MiddleBtn: Story = {
  args: {
    type: 'button',
    children: 'button',
    onClick: fn(),
    state: true,
  },
};
