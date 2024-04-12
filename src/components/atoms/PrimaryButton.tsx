import styled from 'styled-components';

export interface PrimaryButtonProps {
  type?: 'submit' | 'button';
  children: string;
  onClick: () => void;
  state?: boolean;
  size: 'large' | 'medium' | 'small';
}

const PrimaryButton = ({
  type,
  children,
  onClick,
  state,
  size,
}: PrimaryButtonProps) => {
  return (
    <Button type={type} onClick={onClick} $isActive={state} size={size}>
      {children}
    </Button>
  );
};

export default PrimaryButton;

const Button = styled.button<{
  $isActive?: boolean;
  size: PrimaryButtonProps['size'];
}>`
  width: max-content;
  padding: ${({ size }) => {
    switch (size) {
      case 'large':
        return '15px 108px';
      case 'medium':
        return '13px 40px';
      case 'small':
        return '10px 28px';
      default:
        return '48px';
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ $isActive, theme, size }) =>
    size === 'small'
      ? $isActive
        ? theme.colors.choral
        : theme.colors.dark_gray4
      : $isActive
        ? theme.colors.choral
        : theme.colors.dark_gray3};
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
