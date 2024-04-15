import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/molecules/MainHeader';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {};
