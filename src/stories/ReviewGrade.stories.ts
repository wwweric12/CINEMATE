import type { Meta, StoryObj } from '@storybook/react';
import ReviewGrade from '../components/atoms/ReviewGrade';

const meta: Meta<typeof ReviewGrade> = {
  title: 'Components/atoms',
  component: ReviewGrade,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RvGrade: Story = {
  args: { grade: 4.5 },
};
