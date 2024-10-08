import styled from 'styled-components';

export interface PrimaryButtonProps {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  onClick?: () => void;
  state?: boolean;
  size: 'large' | 'medium' | 'small';
  enabled?: boolean;
}

const PrimaryButton = ({
  type,
  children,
  onClick,
  state,
  size,
  enabled,
}: PrimaryButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      $colorState={state}
      size={size}
      disabled={!enabled}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

const Button = styled.button<{
  $colorState?: boolean;
  size: PrimaryButtonProps['size'];
}>`
  min-width: ${({ size }) => {
    switch (size) {
      case 'large':
        return '280px';
      case 'medium':
        return '120px';
      case 'small':
        return '90px';
      default:
        return '120px';
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'large':
        return '15px 0';
      case 'medium':
        return '13px 0';
      case 'small':
        return '10px 0';
      default:
        return '15px 0';
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, $colorState }) =>
    $colorState ? 'white ' : theme.colors.gray2};
  background-color: ${({ $colorState, theme, size }) =>
    size === 'small'
      ? $colorState
        ? theme.colors.choral
        : theme.colors.darkgray3
      : $colorState
        ? theme.colors.choral
        : theme.colors.darkgray3};
  font-size: ${({ size }) => {
    switch (size) {
      case 'large':
        return '18px';
      case 'medium':
        return '14px';
      case 'small':
        return '10px';
      default:
        return '19px';
    }
  }};
  font-weight: 700;
  border-radius: ${({ size }) => {
    switch (size) {
      case 'large':
        return '10px';
      case 'medium':
        return '8px';
      case 'small':
        return '6px';
      default:
        return '10px';
    }
  }};
`;
