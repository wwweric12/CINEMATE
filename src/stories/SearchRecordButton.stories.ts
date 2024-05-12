import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SearchRecordButton from '../components/atoms/SearchRecordButton';

const meta: Meta<typeof SearchRecordButton> = {
  title: 'Components/Button',
  component: SearchRecordButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchRecord: Story = {
  name: 'SearchRecordButton',
  args: {
    text: '파묘',
    onRemoveKeyword: fn(),
  },
};
