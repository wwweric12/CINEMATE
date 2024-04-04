import type { Meta, StoryObj } from '@storybook/react';
import LargeButton from '../components/Button/LargeButton';

const meta: Meta<typeof LargeButton> = {
  title: 'Components/LargeButton',
  component: LargeButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'button',
    children: '회원가입',
    onClick: () => {
      console.log('click');
    },
    state: true,
  },
};
