import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ReviewInput from '../components/molecules/ReviewInput';

const meta: Meta<typeof ReviewInput> = {
  title: 'Components/Input',
  component: ReviewInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Revinput: Story = {
  args: {
    maxLength: 999,
    length: 0,
    placeholder: '리뷰를 작성해주세요',
    onInputChange: fn(),
  },
};
