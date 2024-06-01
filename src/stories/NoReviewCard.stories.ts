import type { Meta, StoryObj } from '@storybook/react';
import NoReviewCard from '../components/atoms/NoReviewCard';

const meta: Meta<typeof NoReviewCard> = {
  title: 'Components/Card',
  component: NoReviewCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Noreivew: Story = {
  name: 'NoReviewCard',
  args: {
    title: '작성된 리뷰가 없습니다',
    desc: '영화에대한 리뷰를 작성해보세요',
  },
};
