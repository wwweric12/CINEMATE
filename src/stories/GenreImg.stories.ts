import type { Meta, StoryObj } from '@storybook/react';
import GenreImg from '../components/atoms/GenreImg';

const meta: Meta<typeof GenreImg> = {
  title: 'Components/Card',
  component: GenreImg,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Genre: Story = {
  args: {
    isCheck: false,
  },
};
