import type { Meta, StoryObj } from '@storybook/react';
import DivideVector from '../components/atoms/DivideVector';

const meta: Meta<typeof DivideVector> = {
  title: 'Components/atoms',
  component: DivideVector,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Divider: Story = {};
