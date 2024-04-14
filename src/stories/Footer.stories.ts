import type { Meta, StoryObj } from '@storybook/react';
import ft from '../components/organisms/Footer';

const meta: Meta<typeof ft> = {
  title: 'Components/Footer',
  component: ft,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  args: {},
};
