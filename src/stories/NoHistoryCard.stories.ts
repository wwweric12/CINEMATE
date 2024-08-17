import type { Meta, StoryObj } from '@storybook/react';
import NoHistoryCard from '../components/atoms/NoHistoryCard';

const meta: Meta<typeof NoHistoryCard> = {
  title: 'Components/Card',
  component: NoHistoryCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoHistory: Story = {
  name: 'NoHistoryCard',
  args: {
    title: '최근 검색 기록이 없습니다',
  },
};
