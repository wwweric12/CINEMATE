import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PrimaryButton from '../components/atoms/PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/Button',
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryBtn: Story = {
  args: {
    type: 'button',
    children: '회원가입',
    onClick: fn(),
    state: true,
    size: 'large',
  },
};
