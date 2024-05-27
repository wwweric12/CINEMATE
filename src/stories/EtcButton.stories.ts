import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import EtcButton from '../components/organisms/EtcButton';

const meta: Meta<typeof EtcButton> = {
  title: 'Components/Button',
  component: EtcButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

// export const EtcBtn: Story = {
//   args: {
//     setModalState: fn(),
//   },
// };
