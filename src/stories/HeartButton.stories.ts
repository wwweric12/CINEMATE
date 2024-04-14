import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import HeartButton from '../components/atoms/HeartButton';

const meta: Meta<typeof HeartButton> = {
  title: 'Components/Button',
  component: HeartButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeartBtn: Story = {
  args: {
    isLike: true,
    onClick: fn(),
  },
};
