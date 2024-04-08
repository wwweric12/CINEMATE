import type { Meta, StoryObj } from '@storybook/react';
import EtcButton from '../components/atoms/Button/EtcButton';

const meta: Meta<typeof EtcButton> = {
  title: 'Components/Button',
  component: EtcButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EtcBtn: Story = {};
