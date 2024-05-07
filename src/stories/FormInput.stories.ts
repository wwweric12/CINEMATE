import type { Meta, StoryObj } from '@storybook/react';
import FormInput from '../components/molecules/FormInput';

const meta: Meta<typeof FormInput> = {
  title: 'Components/Input',
  component: FormInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FInput: Story = {
  args: {
    type: 'email',
    placeholder: '이메일을 입력해주세요',
    validationStatus: 'default',
  },
};
