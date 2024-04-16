import type { Meta, StoryObj } from '@storybook/react';
import ReviewCard from '../components/organisms/ReviewCard';

const meta: Meta<typeof ReviewCard> = {
  title: 'Components/Card',
  component: ReviewCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ReviewCd: Story = {
  args: {
    reviewer: '김동영',
    grade: 4.3,
    date: 8,
    count: 1,
    isLiked: true,
    isMine: false,
    content: '브레드 이발소 영화 진짜 재미 하나도 없다 에반데 ...',
  },
};
