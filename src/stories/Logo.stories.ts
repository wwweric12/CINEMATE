import type { Meta, StoryObj } from '@storybook/react';
import LogoComponent from '../components/atoms/Logo';

const meta: Meta<typeof LogoComponent> = {
  title: 'Components/atoms',
  component: LogoComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {};
