import type { Meta, StoryObj } from '@storybook/react';
import MypageButton from '../components/molecules/MypageButton';

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
  },
};
