import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../components/molecules/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/Input',
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {},
};
