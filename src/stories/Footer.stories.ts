import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/organisms/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StoryFooter: Story = {
  name: 'Footer',
  args: {},
};
