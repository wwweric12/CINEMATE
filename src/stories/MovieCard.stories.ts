import type { Meta, StoryObj } from '@storybook/react';
import MovieCard from '../components/molecules/MovieCard';

const meta: Meta<typeof MovieCard> = {
  title: 'Components/Card',
  component: MovieCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MovieCd: Story = {
  args: {
    title: '브레드이발소',
    grade: 4.3,
    isLiked: false,
    movieImg: '',
  },
};
