import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/molecules/MovieListCard';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MovieListCard: Story = {
  args: {
    title: '브레드 이발소',
    grade: 4.3,
    isLike: true,
  },
};
