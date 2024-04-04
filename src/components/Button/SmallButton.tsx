import styled from 'styled-components';
import { ButtonProps } from './LargeButton';

const SmallButton = ({ type, children, onClick, state }: ButtonProps) => {
  return (
    <Button type={type} onClick={onClick} $isActive={state}>
      {children}
    </Button>
  );
};

export default SmallButton;

const Button = styled.button<{ $isActive: boolean }>`
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.choral : theme.colors.dark_gray4};
  font-size: 10px;
  font-weight: 700;
  border-radius: 6px;
  border: none;
`;
