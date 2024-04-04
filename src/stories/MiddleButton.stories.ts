import type { Meta, StoryObj } from '@storybook/react';
import MiddleButton from '../components/Button/MiddleButton';

const meta: Meta<typeof MiddleButton> = {
  title: 'Components/Button',
  component: MiddleButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MiddleBtn: Story = {
  args: {
    type: 'button',
    children: 'button',
    onClick: () => {
      console.log('click');
    },
    state: true,
  },
};
