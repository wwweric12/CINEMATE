import type { Meta, StoryObj } from '@storybook/react';
import SurveyImg from '../components/atoms/SurveyImg';

const meta: Meta<typeof SurveyImg> = {
  title: 'Components/Card',
  component: SurveyImg,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyImage: Story = {
  args: {
    isChecked: false,
    sort: 'genre',
  },
};
