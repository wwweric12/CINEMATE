import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MypageButton from '../components/atoms/MypageButton';

const meta: Meta<typeof MypageButton> = {
  title: 'Components/Button',
  component: MypageButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MypageBtn: Story = {
  args: {
    content: '작성한 리뷰',
    count: 1,
    onClick: fn(),
  },
};
