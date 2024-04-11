import type { Meta, StoryObj } from '@storybook/react';
import SearchCard from '../components/atoms/SearchCard';

const meta: Meta<typeof SearchCard> = {
  title: 'Components/Card',
  component: SearchCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchCd: Story = {
  args: {
    title: '해리포터와 아즈카반의죄수',
  },
};
