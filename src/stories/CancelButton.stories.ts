import type { Meta, StoryObj } from '@storybook/react';
import CancelButton from '../components/atoms/CancelButton';

const meta: Meta<typeof CancelButton> = {
  title: 'Components/Button',
  component: CancelButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CancelBtn: Story = {};
