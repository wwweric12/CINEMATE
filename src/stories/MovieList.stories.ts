import type { Meta, StoryObj } from '@storybook/react';
import MovieList from '../components/organisms/MovieList';

const meta: Meta<typeof MovieList> = {
  title: 'Components/Card',
  component: MovieList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filter: Story = {
  name: 'MovieList',
  args: {
    isGenre: false,
    genre: '애니메이션 영화',
    listData: [],
  },
};
