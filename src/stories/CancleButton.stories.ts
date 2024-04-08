import type { Meta, StoryObj } from '@storybook/react';
import CancleButton from '../components/atoms/CancleButton';

const meta: Meta<typeof CancleButton> = {
  title: 'Components/Button',
  component: CancleButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CancleBtn: Story = {};
