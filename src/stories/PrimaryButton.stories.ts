import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
<<<<<<< HEAD:src/stories/PrimaryButton.stories.ts
import PrimaryButton from '../components/Button/PrimaryButton';
=======
import LargeButton from '../components/atoms/Button/LargeButton';
>>>>>>> 3b359ce (fix: button 파일 정리 및 storybook 정리):src/stories/LargeButton.stories.ts

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/Button',
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryBtn: Story = {
  args: {
    type: 'button',
    children: '회원가입',
    onClick: fn(),
    state: true,
    size: 'large',
  },
};
