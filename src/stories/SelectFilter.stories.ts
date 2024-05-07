import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectFilter from '../components/molecules/SelectFilter';

const meta: Meta<typeof SelectFilter> = {
  title: 'Components/Filter',
  component: SelectFilter,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filter: Story = {
  name: 'SelectFilter',
  args: {
    defaultOption: 'latest',
    onSelectChange: fn(),
  },
};
