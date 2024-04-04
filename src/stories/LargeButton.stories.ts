import type { Meta, StoryObj } from '@storybook/react';
import LargeButton from '../components/Button/LargeButton';

const meta: Meta<typeof LargeButton> = {
  title: 'Components/Button',
  component: LargeButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeBtn: Story = {
  args: {
    type: 'button',
    children: '회원가입',
    onClick: () => {
      console.log('click');
    },
    state: true,
  },
};
