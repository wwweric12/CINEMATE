import type { Meta, StoryObj } from '@storybook/react';
import FooterButton from '../components/atoms/FooterButton';

const meta: Meta<typeof FooterButton> = {
  title: 'Components/Button',
  component: FooterButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterBtn: Story = {
  args: {
    text: '홈',
    isSelected: true,
  },
};
