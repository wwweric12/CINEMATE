import type { Meta, StoryObj } from '@storybook/react';
import Description from '../components/atoms/Description';

const meta: Meta<typeof Description> = {
  title: 'Components/atoms',
  component: Description,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Descript: Story = {
  args: {
    title: '선호하는 장르를 선택해주세요',
    content: '선호하는 장르 3가지를 선택해주세요',
    state: 'survey',
  },
};
