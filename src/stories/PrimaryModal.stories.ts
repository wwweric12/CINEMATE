import type { Meta, StoryObj } from '@storybook/react';

import PrimaryModal from '../components/molecules/PrimaryModal';

const meta: Meta<typeof PrimaryModal> = {
  title: 'Components/Modal',
  component: PrimaryModal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  name: 'PrimryModal',
  args: {
    state: 'check',
    fieldText: '내가쓴 리뷰를 삭제하시겠습니까?',
    cancelText: '취소하기',
    checkText: '삭제하기',
  },
};
