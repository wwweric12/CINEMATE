import type { Meta, StoryObj } from '@storybook/react';
import Grade from '../components/atoms/MovieGrade';

const meta: Meta<typeof Grade> = {
  title: 'Components/atoms',
  component: Grade,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MovieGrade: Story = {
  args: {
    grade: 4.3,
  },
};
