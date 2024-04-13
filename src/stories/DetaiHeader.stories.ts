import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DetailHd from '../components/molecules/DetailHeader';

const meta: Meta<typeof DetailHd> = {
  title: 'Components/Header',
  component: DetailHd,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DetailHeader: Story = {
  args: {
    title: '뒤로가기 ',
    onClick: fn(),
  },
};
