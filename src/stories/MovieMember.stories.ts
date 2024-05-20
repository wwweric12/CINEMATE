import type { Meta, StoryObj } from '@storybook/react';
import MovieMember from '../components/atoms/MovieMember';

const meta: Meta<typeof MovieMember> = {
  title: 'Components/atoms',
  component: MovieMember,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Member: Story = {
  name: 'MovieMember',
  args: {
    image:
      'https://upload.wikimedia.org/wikipedia/ko/b/b8/1917%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    name: '전석민',
  },
};
