import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NotFoundCard from '../components/molecules/NotFoundCard';

const meta: Meta<typeof NotFoundCard> = {
  title: 'Components/Card',
  component: NotFoundCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoFound: Story = {
  name: 'NotFoundCard',
  args: {
    cardTitle: '404 ERROR',
    contentTitle: 'Page Not Found',
    contentDesc: '페이지를 찾을 수 없습니다',
    cardDesc: '페이지가 존재하지 않거나 사용할 수 없는 페이지입니다',
    leftBtnDesc: '이전 페이지로',
    rightbtnDesx: '홈으로',
    onNavigateClick: fn(),
  },
};
