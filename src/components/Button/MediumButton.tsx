import styled from 'styled-components';
import { ButtonProps } from './LargeButton';

const MediumButton = ({ type, children, onClick, state }: ButtonProps) => {
  return (
    <Button type={type} onClick={onClick} $isActive={state}>
      {children}
    </Button>
  );
};

export default MediumButton;

const Button = styled.button<{ $isActive: boolean }>`
  height: 36px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $isActive, theme }) =>
    $isActive ? 'white' : theme.colors.gray2};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.choral : theme.colors.dark_gray3};
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  border: none;
`;
