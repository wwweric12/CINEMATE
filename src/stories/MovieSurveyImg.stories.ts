import type { Meta, StoryObj } from '@storybook/react';
import SurveyImg from '../components/atoms/MovieSurveyImg';

const meta: Meta<typeof SurveyImg> = {
  title: 'Components/Card',
  component: SurveyImg,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MovieSurveyImage: Story = {
  args: {
    isChecked: false,
  },
};
