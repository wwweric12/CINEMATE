import type { Meta, StoryObj } from '@storybook/react';
import GradeStar from '../components/atoms/GradeStar';

const meta: Meta<typeof GradeStar> = {
  title: 'Components/atoms',
  component: GradeStar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Star: Story = {
  name: 'GradeStar',
  args: {
    index: 3,
    score: 2,
  },
};
