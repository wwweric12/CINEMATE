import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MoreButton from '../components/atoms/Button/MoreButton';

const meta: Meta<typeof MoreButton> = {
  title: 'Components/Button',
  component: MoreButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MoreBtn: Story = {
  args: {
    children: '더보기',
    onClick: fn(),
  },
};
